const express = require('express');
const cors = require('cors');


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
  fetch("https://api.themoviedb.org/3/search/movie?api_key=627ac22760c37360d262266fadac96ed&language=fr-FR&page=1&include_adult=false&query=" + typingValue)
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
