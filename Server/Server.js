const server = require("express")();
const { PORT } = require("../Constants/Constants");

server.listen(PORT, ()=> {
    console.log(`SERVER RUNNINNG | PORT: 3000`);
});

module.exports = server;