const express = require('express');
const app = express()
const Cron = require("cron").CronJob
const axios = require('axios');
var https = require('https');
const cors = require("cors")
app.use(cors())
app.use(express.json())
require("dotenv").config()
app.get("/test",function(req,res,next){
    
  let decodeUrl = decodeURIComponent(req.query.url);
  let constructUrl = `${decodeUrl}&apiKey=${process.env.apiKey}`;
  console.log(constructUrl)
  axios({
      method:'get',
      url:constructUrl
  }).then(response => {
      console.log(response.data)
      res.send(response.data);
  }).catch(e => {
      res.send("Error Occured");
  })
})

app.get("/vilas",(req,res,next) => {
  res.send("This is Test Route");
})


app.listen(process.env.PORT,(err)=>{
  if(err){
    console.log(err)
  }else{
    console.log(`started listening port ${process.env.PORT}`)
  }
})


