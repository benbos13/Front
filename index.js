const express = require("express"); // Initialisation du module express
const app = express(); // Initialisation de l'application web
const port = 3000; // Port sur lequel le serveur web est lancé

function main(){

    app.use(express.static("public"));

    app.listen(port, function(){
        console.log(`Example app listening on port ${port}`);
    });
}


main();