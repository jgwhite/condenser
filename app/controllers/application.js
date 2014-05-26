export default Ember.Controller.extend({
  needs: ['me', 'user', 'track'],
  me: Ember.computed.readOnly('controllers.me'),
  user: Ember.computed.readOnly('controllers.user'),
  track: Ember.computed.readOnly('controllers.track'),
  isConnected: Ember.computed.readOnly('me.isConnected')
});
