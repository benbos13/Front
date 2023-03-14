const express = require("express"); // Initialisation du module express
const app = express(); // Initialisation de l'application web
const port = 3000; // Port sur lequel le serveur web est lancé

const apiPres = {

    start:function(port){

        app.use(express.static("public"));

        app.get("/test", function(req, res){
            const testObj ={
                test: "test"
            };
            res.json(testObj);
        });

        app.listen(port, function(){
            console.log(`Example app listening on port ${port}`);
    });
    }
}


module.exports = apiPres;