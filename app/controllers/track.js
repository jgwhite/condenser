export default Ember.ObjectController.extend({
  loaded: Em.computed.notEmpty('model')
});
