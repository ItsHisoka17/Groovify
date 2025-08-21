const Utils = require("../Utils/Utils");
const {CLIENT_ID, SCOPES, BASE_AUTHORIZATION_URL, REDIRECT_URI} = require("../Constants/Constants");

class Authenticate {
    constructor(request, response){
        this.request = request;
        this.response = response;
    };

    redirAuthorize(){ 
        let scope = SCOPES.join(" ");
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
        console.log(authUrl);
        this.response.redirect(authUrl);
    };
};

module.exports = Authenticate;