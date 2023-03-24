const express = require('express');
const cors = require('cors');
const Token = require('./token');

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





port = 3080;



//app.use(cors());







app.get("/",(req,res) => {

  res.json([{
    "movie" : "Avatar",
    "actor" : "Saldana",
    "realisator" : "James Cameron"},
    {
      "movie" : "Joker",
      "actor" : "Bidule",
      "realisator" : "Truc"},

    ]

  );







  //getRequest("Tintin");


});


io.on('connection', (socket) => {
  console.log('a user connected');
  console.log(socket);

  socket.on('requestMovies',(arg) => {
    console.log("request from client");
    getRequest(arg).then(function(value){
      console.log(value);
      socket.emit('sendMovies',value);
    });




    console.log("Fin requête")
  })
});


async function getRequest(typingValue){
  const donnee = await fetch(tokenTMDB + typingValue);
  const json = await donnee.json();
  //console.log(json)
  return json;

}





http.listen(port, ()=>{
  console.log("Server is running on port 3080");
});
