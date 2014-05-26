export default Ember.Route.extend({
  model: function(params) {
    return this.store.find('user', params.user_id);
  },

  serialize: function(model) {
    var me = this.controllerFor('me').get('model');

    if (model === me) {
      return { user_id: 'me' };
    } else {
      return this._super(model);
    }
  }
});
