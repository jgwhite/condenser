var Router = Ember.Router.extend({
  location: ENV.locationType
});

Router.map(function() {
  this.resource('user', { path: ':user_id' }, function() {
    this.resource('tracks');
    this.resource('followings');
  });
});

export default Router;
