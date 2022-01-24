const axios = require('axios');
var https = require('https');
var express = require('express');
var router = express.Router();
var apiKey = "d1e2d12e8f7c4323af2f5468e0053752";
router.get("/",function(req,res,next){
    
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

router.get("/vilas",(req,res,next) => {
    
    res.send("This is Test Route");
    
})

module.exports = router;