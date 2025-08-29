require("dotenv").config();
const ENV = process.env;
const {CLIENT_ID, CLIENT_KEY, PORT, SESSIONID} = ENV;

const Constants = {
    BASE_AUTHORIZATION_URL: "https://accounts.spotify.com/authorize",
    TOKEN_FETCH_URL: "https://accounts.spotify.com/api/token",
    BASE_API_URL: "https://api.spotify.com/v1",
    OPEN_SPOTIFY_URL: "https://open.spotify.com/",
    SCOPES: [
        "user-read-private",
        "user-read-email",
        "user-top-read",
        "user-read-recently-played",
        "user-follow-read"
    ],
    BASE_URL: "https://groovify.space",
    REDIRECT_URI: "https://groovify.space/authorize/callback",
    BACKEND_API_URL: "https://groovify.space/api",
    CLIENT_ID,
    CLIENT_KEY,
    PORT,
    SESSIONID
};


module.exports = Constants;