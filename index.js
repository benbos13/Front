const apiServ = require("./presentation/apiPres"); // Initialisation de l'application web
const port = 3000; // Port sur lequel le serveur web est lancé

function main(){

    apiServ.start(port);
}


main();