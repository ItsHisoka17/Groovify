require("dotenv").config();
const ENV = process.env;
const {CLIENT_ID, CLIENT_KEY, PORT} = ENV;

const Constants = {
    BASE_AUTHORIZATION_URL: "https://accounts.spotify.com/authorize",
    BASE_API_URL: "https://api.spotify.com",
    SCOPES: [
        "user-read-private",
        "user-read-email",
        /*
        "user-read-playback-position",
        "user-top-read",
        "user-read-recently-played",
        "user-personalized"*/
    ],
    REDIRECT_URI: "https://moodify.com/authorize/callback",
    CLIENT_ID,
    CLIENT_KEY,
    PORT
};


module.exports = Constants;