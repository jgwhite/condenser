var Router = Ember.Router.extend({
  location: ENV.locationType
});

Router.map(function() {
  this.resource('me');
});

export default Router;
