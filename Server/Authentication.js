const Utils = require("../Utils/Utils");
const {CLIENT_ID, SCOPES, BASE_AUTHORIZATION_URL, REDIRECT_URI} = require("../Constants/Constants");

class Authenticate {
    constructor(request, response){
        this.request = request;
        this.response = response;
    };

    redirAuthorize(){ 
        let scope = [];
        for (let k in SCOPES) {
            scope.push(SCOPES[k])
        };
        let state = Utils.generateState(16);
        this.response.redirect(`${BASE_AUTHORIZATION_URL}?${
            Utils.querystringify({
                response_type: "code",
                client_id: CLIENT_ID,
                scope,
                state,
                redirect_uri: REDIRECT_URI
            })
        }`)
    };
};

module.exports = Authenticate;