export default {
  name: 'soundcloud',

  initialize: function() {
    SC.initialize({
      client_id: ENV.SC_CLIENT_ID,
      redirect_uri: ENV.SC_CALLBACK_URL
    });

    var accessToken = localStorage.accessToken;

    if (accessToken) {
      SC.storage().setItem('SC.accessToken', accessToken);
    }
  }
};
