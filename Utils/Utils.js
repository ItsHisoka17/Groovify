class Utils {

    /*
     * @param {object} data
     * @returns {string}
     */
    static querystringify(data){
        let query = "?";
        let k;
        for (k in data){
            query += `${k}=${data[k]}&`;
        };
        return query;
    };

    /*
    * @param {string} query
    * @returns {object}
    */
    static parseQuery(query){
        let dataArr = query.slice(1).split("+");
        let data = {};
        for (let e of dataArr){
            data[e.split("=")[0]] = e.split("=")[1];
        };
        return data;
    }

    /*
    * @param {number} i
    * @returns {string}
    */
    static generateState(i){
        let state = "";
        let ind = 0;
        let chars = "abcdefghijklmnopqrstuvwxyz0123456789";
        for (; ind < i; ind++){
            state += chars.charAt(Math.floor(Math.random()*chars.length));
        };
        return state;
    };
}

module.exports = Utils;