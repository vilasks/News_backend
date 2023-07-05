const express = require('express');
const app = express()
const Cron = require("cron").CronJob
const axios = require('axios');
var https = require('https');
const ping_controller = require("../controllers/custom_ping")
var apiKey = "d1e2d12e8f7c4323af2f5468e0053752";
const cors = require("cors")
app.use(cors())
app.use(express.json())
app.get("/test",function(req,res,next){
    
  let decodeUrl = decodeURIComponent(req.query.url);
  let constructUrl = `${decodeUrl}&apiKey=${apiKey}`;
  axios({
      method:'get',
      url:constructUrl
  }).then(response => {
      res.send(response.data);
  }).catch(e => {
      res.send("Error Occured");
  })
})

app.get("/vilas",(req,res,next) => {
  
  res.send("This is Test Route");
  
})

app.get("/auth/ping",ping_controller.PingResponse)

let pingJob = new Cron("*/5 * * * *", ()=>ping_controller.Ping())

app.listen(process.env.PORT,(err)=>{
  if(err){
    console.log(err)
  }else{
    pingJob.start()
    console.log(`started listening port ${process.env.PORT}`)
  }
})


