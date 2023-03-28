const express = require('express');
const cors = require('cors');
const Token = require('./token');




let tokenTMDB = Token.getTokenTMDB();
console.log(tokenTMDB);


const app = express();


port = 3080;



app.use(cors());







app.get("/Movies",(req,res) => {

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




  getRequest("Tintin");


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


app.listen(port, ()=>{
  console.log("Server is running on port 3080");
});
