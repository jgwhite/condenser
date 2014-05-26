export default Ember.Component.extend({
  tagName: 'sc-oembed',
  height: 166,
  autoPlay: true,

  embed: function() {
    this.removeAllChildren();

    var uri = this.get('uri');

    if (uri) {
      var props = {
        maxheight: this.get('height'),
        color: this.get('color'),
        auto_play: this.get('autoPlay')
      };
      var element = this.get('element');

      SC.oEmbed(uri, props, element);
    }
  }.observes('uri').on('didInsertElement')
});
