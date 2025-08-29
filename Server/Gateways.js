const { BASE_URL, SESSIONID } = require("../Constants/Constants");
const Authenticate = require("./Authentication");
const Fetch = require("./Fetch");
const express = require("express");
const session = require("express-session");
const path = require("path");
const cookies = require("cookie-parser");
const cors = require("cors");

class Gateway {
    constructor(server){
        console.log("Gateway initializing...");
        setInterval((async ()=> {
            await fetch(BASE_URL, {method: "GET"});
        }), 13*60*1000);
        server.use(express.json());
        server.use(cookies());
        server.use(cors({origin: BASE_URL, credentials: true}));
        server.use(session({
            secret: SESSIONID,
            resave: false,
            saveUninitialized: false,
            cookie: {
                httpOnly: true,
                secure: true,
                maxAge: 1000 * 60 * 60 * 24
            }
        }));
        this.fetch = new Fetch();


        server.get("/authorize", (req, res)=> {
            new Authenticate(req, res)
            .redirAuthorize();
        });

        server.get("/authorize/callback", async (req, res)=> {
            let { code } = req.query;
            let data = await new Authenticate(req, res).fetchToken(code);
            req.session.token = data["access_token"];
            req.session.expiry = data["expires_in"];
            req.session.loggedIn = true;
            res.redirect(BASE_URL);
            console.log(req.session);//Tests
            setTimeout(()=> {req.session.loggedIn = false}, req.session.expiry*1000);
        });

        server.get("/api/validate_session", (req, res)=> {
            if (req.session.loggedIn) {
                res.set({"Access-Control-Allow-Origin": "https://groovify.space",
"Access-Control-Allow-Credentials": true})
                res.status(200).json({status: 200});
            } else {
                res.status(401).json({status: 401});
            }
        });

        server.get("/api", async (req, res)=> {
            let { token } = req.session;
            if (!token) {
                res.redirect(BASE_URL);
            };
            let requestedData = req.query;
            let dataJson;
            switch(requestedData.data){
                case "user_data": {
                    dataJson = await this.fetch.fetchArtists(token);
                    break;
                };

                case "top_tracks": {
                    dataJson = await this.fetch.fetchTracks(token);
                    break;
                };

                case "top_artists": {
                    dataJson = await this.fetch.fetchArtists(token);
                    break;
                };
            };
            res.json(dataJson);
        });
        server.use(express.static(path.join(process.cwd(), "Client", "dist")));
        server.get(/^(?!\/(api|authorize)).*/, (req, res)=> {
            res.sendFile(path.join(process.cwd(), "Client", "dist", "index.html"));
        })
        console.log("Gateway initialized");
    };

};

module.exports = Gateway;