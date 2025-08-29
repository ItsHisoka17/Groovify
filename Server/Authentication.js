const Utils = require("../Utils/Utils");
const {CLIENT_ID, SCOPES, BASE_AUTHORIZATION_URL, REDIRECT_URI, TOKEN_FETCH_URL, CLIENT_KEY} = require("../Constants/Constants");
const {RequestError} = require("../Structures/Error");
class Authenticate {
    constructor(request, response){
        this.request = request;
        this.response = response;
    };

    redirAuthorize(){ 
        let scope = SCOPES.join(" ");
        scope = encodeURIComponent(scope);
        let state = Utils.generateState(16);
        let authUrl = (`${BASE_AUTHORIZATION_URL}${
            Utils.querystringify({
                response_type: "code",
                client_id: CLIENT_ID,
                scope,
                state,
                redirect_uri: REDIRECT_URI
            })
        }`);
        this.response.redirect(authUrl);
    };

    fetchToken(code){
        let body = new URLSearchParams({
                code,
                grant_type: "authorization_code",
                redirect_uri: REDIRECT_URI
            });
        return fetch(TOKEN_FETCH_URL, {
            method: "POST",
            body: body.toString(),
            headers: {
                "content-type": "application/x-www-form-urlencoded",
                "Authorization": `Basic ${new Buffer.from(CLIENT_ID + ":" + CLIENT_KEY).toString("base64")}`
            },
        })
        .then((res)=> {
            if (res.status!==200){
                console.error(new RequestError(`TOKEN FETCH FAILED | STATUS: ${res.status} | RAW RESPONSE: ${res}`));
                this.response.status(res.status);
                this.response.json({error: `TOKEN FETCH FAILED | STATUS: ${res.status} | RAW RESPONSE: ${res}`, status: res.status});
                return;
            };
            return res.json()
            .then((body)=> {
                return body;
            });
        });
    };
};

module.exports = Authenticate;