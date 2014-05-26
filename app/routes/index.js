export default Ember.Route.extend({
  beforeModel: function() {
    var me = this.controllerFor('me');

    if (me.get('isConnected')) {
      this.transitionTo('user', me.get('model'));
    }
  }
});
