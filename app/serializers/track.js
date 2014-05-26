import ApplicationSerializer from 'condenser/serializers/application';

export default ApplicationSerializer.extend({
  extractSingle: function(store, type, payload, id) {
    payload = {
      track: payload
    };

    return this._super(store, type, payload, id);
  },

  extractArray: function(store, type, payload) {
    payload.forEach(function(track) {
      track.user = track.user_id;
    });

    payload = {
      tracks: payload
    };

    return this._super(store, type, payload);
  }
});
