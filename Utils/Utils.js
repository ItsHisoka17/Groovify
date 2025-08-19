class Utils {

    /*
     * @param {Object} data
     * @returns {String}
     */
    static querystringify(data){
        let query = "";
        let k;
        for (k in data){
            query += `${k}=${data[k]}+`;
        };
        return query;
    };

    static generateState(i){
        let state = "";
        let ind = 0;
        let chars = "abcdefghijklmnopqrstuvwxyz0123456789";
        for (; ind < i; ind++){
            state += chars.charAt(Math.floor(Math.random()*chars.length));
        };
        return state;
    }
}

module.exports = Utils;