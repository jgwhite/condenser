export default DS.Adapter.extend({
  find: function(store, type, id) {
    var uri = uriForTypeAndId(type, id);

    return scGet(uri);
  },

  findHasMany: function(store, record, url, relationship) {
    var uri      = url.replace('https://api.soundcloud.com', '');
    var count    = record.get(relationship.key + 'Count') ||
                   record.get(relationship.key.singularize() + 'Count');
    var limit    = 50;
    var pages    = Math.ceil(count / limit);
    var promises = [];

    for (var i = 0; i < pages; i++) {
      var promise = scGet(uri, { limit: limit, offset: i * limit });
      promises.push(promise);
    }

    return Ember.RSVP.all(promises).then(function(results) {
      return results.reduce(function(acc, result) {
        return acc.concat(result);
      }, []);
    });
  }
});

function scGet(uri, options) {
  return new Ember.RSVP.Promise(function(resolve, reject) {
    SC.get(uri, options, function(payload, error) {
      if (error) {
        Ember.run(null, reject, error);
      } else {
        Ember.run(null, resolve, payload);
      }
    });
  }, 'SC.get %@ %@'.fmt(uri, options));
}

function uriForTypeAndId(type, id) {
  var typeKey = type.typeKey;

  if (typeKey === 'user' && id === 'me') {
    return '/me';
  } else {
    return '/' + Ember.String.pluralize(typeKey) + '/' + id;
  }
}
