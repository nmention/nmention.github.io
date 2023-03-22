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
    origins: 'http://127.0.0.1:4200"',


  }
});


app.use(cors());












const events = require('events')
let event = new events.EventEmitter();














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


  io.on('connection', (socket) => {
    console.log('a user connected');
  });




  //getRequest("Tintin");


});


async function getRequest(typingValue){
  fetch(tokenTMDB + typingValue)
      .then(data =>{
        return data.json();
      })
      .then(post =>{
        console.log(post)
      })

}

event.on('SearchMovies',(type)=>{
  getRequest(type);
});



app.listen(port, ()=>{
  console.log("Server is running on port 3080");
});
