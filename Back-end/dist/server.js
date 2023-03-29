"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
const express = require('express');
const cors = require('cors');
const Token = require('../token');
const app = require('express')();
const http = require('http').createServer(app);
/*app.use(cors({
  origin: ['http://localhost:4200'],
  Access-Control-Allow-Origin:*

}))*/
const io = require('socket.io')(http, {
    cors: {
        origins: ['http://127.0.0.1:4200'],
    }
});
app.use(cors());
let tokenTMDB = Token.getTokenTMDB();
console.log(tokenTMDB);
const port = 3080;
//app.use(cors());
app.get("/", (req, res) => {
    res.json([{
            "movie": "Avatar",
            "actor": "Saldana",
            "realisator": "James Cameron"
        },
        {
            "movie": "Joker",
            "actor": "Bidule",
            "realisator": "Truc"
        },
    ]);
    //getRequest("Tintin");
});
io.on('connection', (socket) => {
    console.log('a user connected');
    console.log(socket);
    socket.on('requestMovies', (arg) => {
        console.log("request from client");
        getRequest(arg).then(function (value) {
            console.log(value);
            socket.emit('sendMovies', value);
        });
        console.log("Fin requête");
    });
});
function getRequest(typingValue) {
    return __awaiter(this, void 0, void 0, function* () {
        const donnee = yield fetch(tokenTMDB + typingValue);
        const json = yield donnee.json();
        //console.log(json)
        return json;
    });
}
http.listen(port, () => {
    console.log("Server is running on port 3080");
});
