export default Ember.ObjectController.extend({
  isConnected: Em.computed.notEmpty('model')
});
