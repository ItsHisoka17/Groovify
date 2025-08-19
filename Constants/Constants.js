const ENV = process.env;
const {CLIENT_ID, CLIENT_KEY} = ENV;

const Constants = {
    BASE_AUTHORIZATION_URL: "https://accounts.spotify.com/authorize",
    BASE_API_URL: "https://api.spotify.com",
    SCOPES: {
        read: "user-read-private",
        email: "user-email-private",
        playback_position: "user-read-playback-position",
        playback_top: "user-top-read",
        playback_recent: "user-read-recently-played",
        personalized: "user-personalized"
    },
    REDIRECT_URI: "https://moodify.com/authorize/callback"
};


module.exports = Constants;