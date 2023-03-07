const express = require("express"); // Initialisation du module express
const app = express(); // Initialisation de l'application web
const port = 3000; // Port sur lequel le serveur web est lancé

function main(){

    app.get("/", (req, res) => { 
        const currentDate = new Date();        
        console.log("page called at" + currentDate);
        res.send("Hello world nous sommes le " + currentDate);
    });

    app.listen(port, function(){
        console.log(`Example app listening on port ${port}`);
    });
}


main();