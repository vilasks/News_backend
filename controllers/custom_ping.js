const { default: axios } = require("axios")

require("dotenv").config()
async function Ping(){
    try{
        let server = process.env.PING_SERVERS.split(",")
        server.forEach(async(ele)=>{
            let ping = await axios.get(ele).catch((err)=>{
                console.log(err.response.status)
            })
            console.log(ping)
        })
    }catch(err){
        console.log(err) 
    }
}

async function PingResponse(req,res){
    try{
        console.log(`Pinged from ${req?.ip}`)
        return res.status(200).send({status: 1, success: true, msg: "system online"})
    }catch(e){
        return res.status(200).send({status: 1, success: true, msg: "system online"})
    }
}

module.exports = {
    Ping, PingResponse
}