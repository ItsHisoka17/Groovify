const { BASE_API_URL } = require("../Constants/Constants");

class Fetch {
    constructor(token){
        this.token = token;
    }

    async fetchUserData(){ 
        let response = await fetch(BASE_API_URL + "/me", {
            method: "GET",
            headers: {
                "Authorization": `Bearer ${this.token}`
            }
        });
        let responseData = await response.json();
        let {display_name, url, followers} = responseData;
        let image = responseData.images[0].url;
        let data = {
            name: display_name,
            image,
            url,
            followers: followers["total"]
        };
        return data;
    };

    async fetchTracks(){
        let response = await fetch(BASE_API_URL + "/me/top/tracks?time_range=medium_term", {
            method: "GET",
            headers: {
                "Authorization": `Bearer ${this.token}`
            }
        });
        let { items } = await response.json();
        let tracksArray = [];
        for (let t of items) {
            let artists = [];
            for (let a of t.artists){
                artists.push(e.name);
            };
        let image = t.album.images[0]["url"];
            tracksArray.push({
                name: t.name,
                url: t.url,
                artists,
                image,
            });
        };
        return tracksArray;
    };

    async fetchArtists(){
        let response = await fetch(BASE_API_URL + "/me/top/artists?time_range=medium_term", {
            method: "GET",
            headers: {
                "Authorization": `Bearer ${this.token}`
            }
        });
        let { items } = await response.json();
        let artistArray = [];
        for (let a of items) {
            let image = a.images[0]["url"];
            artistArray.push({
                name: a.name,
                url: a.url,
                image
            });
        };
        return artistArray;
    };

    
};

module.exports = Fetch;