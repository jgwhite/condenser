export default DS.RESTSerializer.extend({
  keyForAttribute: function(attr) {
    return Ember.String.underscore(attr);
  }
});
