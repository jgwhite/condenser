export default DS.Adapter.extend({
  find: function(/* store, type, id */) {
    return new Ember.RSVP.Promise(function(resolve, reject) {
      SC.connect(function() {
        SC.get('/me', function(user, error) {
          if (error) {
            Ember.run(null, reject, error);
          } else {
            Em.Logger.info(user);
            Ember.run(null, resolve, { user: user });
          }
        });
      });
    });
  }
});
