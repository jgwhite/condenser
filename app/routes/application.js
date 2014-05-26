export default Ember.Route.extend({
  beforeModel: function() {
    if (SC.isConnected()) {
      return this.setupMe();
    }
  },

  setupMe: function(transition) {
    return this.store.find('user', 'me').then(function(me) {
      this.controllerFor('me').set('model', me);
      if (transition) {
        this.transitionTo('user', me);
      }
    }.bind(this));
  },

  actions: {
    connect: function() {
      SC.connect(Ember.run.bind(this, function() {
        localStorage.accessToken = SC.accessToken();
        this.setupMe(true);
      }));
    },

    disconnect: function() {
      SC.disconnect();
      delete localStorage.accessToken;
      this.controllerFor('me').set('model', null);
      this.transitionTo('index');
    }
  }
});
