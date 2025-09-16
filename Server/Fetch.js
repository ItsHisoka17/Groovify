const { BASE_API_URL, OPEN_SPOTIFY_URL } = require("../Constants/Constants");
const { RequestError } = require("../Structures/Error")

class Fetch {
    constructor(){
    }

    async fetchUserData(token){ 
        let response = await fetch(BASE_API_URL + "/me", {
            method: "GET",
            headers: {
                "Authorization": `Bearer ${token}`
            }
        });
        if (!response.ok){
            console.error(new RequestError(await response.text()));
        };
        let responseData = await response.json();
        let {display_name, uri, followers} = responseData;
        let url = `${OPEN_SPOTIFY_URL}user/${uri.split(":")[2]}`;
        let image = responseData.images[0].url;
        let data = {
            name: display_name,
            image,
            url,
            followers: followers["total"]
        };
        return data;
    };

    async fetchTracks(token){
        let response = await fetch(BASE_API_URL + "/me/top/tracks?time_range=short_term&limit=5", {
            method: "GET",
            headers: {
                "Authorization": `Bearer ${token}`
            }
        });
        if (!response.ok){
            console.error(new RequestError(await response.text()));
        };
        let { items } = await response.json();
        let tracksArray = [];
        for (let t of items) {
            let artists = [];
            for (let a of t.artists){
                artists.push(a.name);
            };
        let url = `${OPEN_SPOTIFY_URL}track/${t.uri.split(":")[2]}`;    
        let image = t.album.images[0]["url"];
            tracksArray.push({
                name: t.name,
                url,
                artists,
                image,
            });
        };
        return tracksArray;
    };

    async fetchArtists(token){
        let response = await fetch(BASE_API_URL + "/me/top/artists?time_range=short_term&limit=5", {
            method: "GET",
            headers: {
                "Authorization": `Bearer ${token}`
            }
        });
        if (!response.ok){
            console.error(new RequestError(await response.text()));
        };
        let { items } = await response.json();
        let artistArray = [];
        for (let a of items) {
            let url = `${OPEN_SPOTIFY_URL}artist/${a.uri.split(":")[2]}`;
            let image = a.images[0]["url"];
            artistArray.push({
                name: a.name,
                url,
                image
            });
        };
        return artistArray;
    };

    
};

module.exports = Fetch;