import ApplicationSerializer from 'condenser/serializers/application';

export default ApplicationSerializer.extend({
  extractSingle: function(store, type, payload, id) {
    Ember.merge(payload, {
      links: {
        tracks: payload.uri + '/tracks',
        followings: payload.uri + '/followings'
      }
    });

    payload = {
      user: payload
    };

    return this._super(store, type, payload, id);
  },

  extractArray: function(store, type, payload) {
    payload = {
      users: payload
    };

    return this._super(store, type, payload);
  }
});
