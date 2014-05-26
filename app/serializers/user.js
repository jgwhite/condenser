import ApplicationSerializer from 'condenser/serializers/application';

export default ApplicationSerializer.extend({
  primaryKey: 'permalink',

  extractSingle: function(store, type, payload, id) {
    addLinks(payload);

    payload = {
      user: payload
    };

    return this._super(store, type, payload, id);
  },

  extractArray: function(store, type, payload) {
    payload.forEach(addLinks);

    payload = {
      users: payload
    };

    return this._super(store, type, payload);
  }
});

function addLinks(user) {
  Ember.merge(user, {
    links: {
      tracks: user.uri + '/tracks',
      followings: user.uri + '/followings'
    }
  });
}
