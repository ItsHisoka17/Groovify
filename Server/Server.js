const server = require("express")();
const Gateway = require("./Gateways");
const { PORT } = require("../Constants/Constants");

console.log("STARTING SERVER...")
new Gateway(server);

server.listen(PORT, ()=> {
    console.log(`SERVER RUNNING | PORT: ${PORT}`)
});