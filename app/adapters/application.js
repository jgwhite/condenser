export default DS.Adapter.extend({
  find: function(store, type, id) {
    var uri = uriForTypeAndId(type, id);

    return new Ember.RSVP.Promise(function(resolve, reject) {
      SC.get(uri, function(payload, error) {
        if (error) {
          Ember.run(null, reject, error);
        } else {
          Ember.run(null, resolve, payload);
        }
      });
    });
  },

  findHasMany: function(store, record, url /*, relationship */) {
    var uri = url.replace('https://api.soundcloud.com', '');

    return new Ember.RSVP.Promise(function(resolve, reject) {
      SC.get(uri, function(payload, error) {
        if (error) {
          Ember.run(null, reject, error);
        } else {
          Ember.run(null, resolve, payload);
        }
      });
    });
  }
});

function uriForTypeAndId(type, id) {
  var typeKey = type.typeKey;

  if (typeKey === 'user' && id === 'me') {
    return '/me';
  } else {
    return '/' + Ember.String.pluralize(typeKey) + '/' + id;
  }
}
