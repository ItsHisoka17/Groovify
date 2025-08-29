const { BASE_URL } = require("../Constants/Constants");
const Authenticate = require("./Authentication");
const Fetch = require("./Fetch");
const express = require("express");
const path = require("path");

class Gateway {
    constructor(server){
        console.log("Gateway initialized...");

        server.use(express.json());

        server.get("/authorize", (req, res)=> {
            new Authenticate(req, res)
            .redirAuthorize();
        });

        server.get("/authorize/callback", async (req, res)=> {
            let { code } = req.query;
            let data = await new Authenticate(req, res).fetchToken(code);
            this.token = data["access_token"];
            this.tokenExpiry = data["expires_in"];
            this.refreshToken = data["refresh_token"];
            this.fetch = new Fetch(this.token);
            res.redirect(BASE_URL);
        });

        server.get("/api/validate_session", (req, res)=> {
            if (this.token) {
                res.set({"Access-Control-Allow-Origin": "https://groovify.space",
"Access-Control-Allow-Credentials": true})
                res.json({status: 200}).status(200);
            } else {
                res.
                json({status: 401}).
                status(401);
            };
        })

        server.get("/api", (req, res)=> {
            let requestedData = req.query;
            let dataJson;
            switch(requestedData.data){
                case "user_data": {
                    this.fetch.fetchArtists()
                    .then(data=> {
                        dataJson = data;
                    });
                    break;
                };

                case "top_tracks": {
                    this.fetch.fetchTracks()
                    .then(data=> {
                        dataJson = data;
                    });
                    break;
                };

                case "top_artists": {
                    this.fetch.fetchArtists()
                    .then(data=> {
                        dataJson = data;
                    });
                    break;
                };
            };
            res.json(dataJson);
        });
        server.use(express.static(path.join(process.cwd(), "Client", "dist")));
        server.get(/^(?!\/(api|authorize)).*/, (req, res)=> {
            res.sendFile(path.join(process.cwd(), "Client", "dist", "index.html"));
        })
        console.log("GATEWAY STARTED");
    };

};

module.exports = Gateway;