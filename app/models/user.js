var attr = DS.attr;
var hasMany = DS.hasMany;
// var belongsTo = DS.belongsTo;

export default DS.Model.extend({
  uri: attr('string'),
  permalink: attr('string'),
  permalinkUrl: attr('string'),

  kind: attr('string'),

  username: attr('string'),
  firstName: attr('string'),
  lastName: attr('string'),
  fullName: attr('string'),

  description: attr('string'),

  online: attr('boolean'),

  avatarUrl: attr('string'),
  website: attr('string'),
  websiteTitle: attr('string'),

  discogsName: attr('string'),
  myspaceName: attr('string'),

  city: attr('string'),
  country: attr('string'),

  plan: attr('string'),

  primaryEmailConfirmed: attr('boolean'),

  followersCount: attr('number'),
  followingsCount: attr('number'),
  playlistCount: attr('number'),
  privatePlaylistsCount: attr('number'),
  privateTracksCount: attr('number'),
  publicFavoritesCount: attr('number'),
  trackCount: attr('number'),

  uploadSecondsLeft: attr('number'),

  tracks: hasMany('track', { async: true }),
  followings: hasMany('user', { async: true, inverse: 'followers' }),
  followers: hasMany('user', { async: true, inverse: 'followings' })

  // quota: Object
  // subscriptions: Array[0]
});
