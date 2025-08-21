const Authenticate = require("./Authentication");

class Gateway {
    constructor(server){
        console.log("Gateway initialized...");
        server.get("/", (req, res)=> {
            res.sendFile(require("path").join(__dirname, `../Public/index.html`))
        });
        server.get("/authorize", (req, res)=> {
            new Authenticate(req, res)
            .redirAuthorize();
        });

        server.get("/authorize/callback", (req, res)=> {

        });
    };
};

module.exports = Gateway;