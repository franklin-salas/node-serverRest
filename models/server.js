
const express = require('express');
const cors = require('cors');
const dbconnect = require('../database/config');

class Server {


    constructor(){
        this.app = express();
        this.port = process.env.PORT;
        this.conectarDB();
        this.middleware();
        this.routes(); 
    }

    async conectarDB(){
        await dbconnect();
    }

    
    middleware(){
        //Cors
        this.app.use(cors());
        //lectura y parseo del body
        this.app.use(express.json());
        //directorio publico
        this.app.use(express.static('public'));
    }
    routes(){
        this.app.use('/api/usuarios',require('../routes/usuarios'))
    }



    listen(){
        this.app.listen(this.port ,() =>{ console.log('running port : ' + this.port)});   
    }
}

module.exports = Server;