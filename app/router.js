var Router = Ember.Router.extend({
  location: ENV.locationType
});

Router.map(function() {
  this.resource('user', { path: ':user_id' }, function() {
    this.resource('tracks', function() {
      this.resource('track', { path: ':track_id' });
    });
    this.resource('followings');
  });
});

export default Router;
