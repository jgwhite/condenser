export default Ember.Route.extend({
  model: function() {
    var user = this.modelFor('user');
    return user.get('followers');
  }
});
