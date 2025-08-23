class RequestError extends Error {
    constructor(message){
        message = message instanceof String ? message : "UNKOWN ERROR";
        this.message = message;
        this.name = "RequestError";
    };
};

module.exports = {RequestError};