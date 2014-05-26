export default Ember.Controller.extend({
  needs: ['me'],
  me: Ember.computed.readOnly('controllers.me'),
  isConnected: Ember.computed.readOnly('me.isConnected')
});
