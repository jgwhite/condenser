export default Ember.Route.extend({
  model: function(params) {
    return this.store.find('track', params.track_id);
  },

  renderTemplate: Em.K
});
