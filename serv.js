const express = require("express")
const fs = require("fs")
const app = express()
app.use(express.json())\
const cors = require('cors')
app.use(cors())

let Objec = {
  users:{},
  lid:{}
}
try{
let message = JSON.parse(fs.readFileSync("/message.json",{encoding:'Utf8'}))
}
catch{
  fs.writeFileSync("/message.json",JSON.stringify(Objec),{encoding:'utf8',flag:'w'})
  console.log(Objec)
  let message = JSON.parse(fs.readFileSync("/message.json",{encoding:'Utf8'}))
  console.log(message)
}

const port = 1331

app.get("/",(req,res)=>{
    res.setHeader('Access-Control-Allow-Origin', '*')

    message = JSON.parse(fs.readFileSync("/message.json",{encoding:'Utf8'}))
    var arr = Object.values(message.users)
    arr.sort((a, b) => (a.value+a.coins) > (b.value+b.coins) ? -1 : 1)
    message.lid = arr
    fs.writeFileSync("/message.json",JSON.stringify(message),{encoding:'utf8',flag:'w'})
    res.json(message)
    console.log("geted")
})
app.post("/",(req,res)=>{
    us = req.body.us
    let obj={
           nick:req.body.nick,
           us:us,
           value:req.body.value,
           coins:req.body.coins
    }
    if(message.users[us]){
        message.users[us].value = req.body.value
    }
    message.users[us] = obj
    console.log(req.body)
    res.json(message)
    fs.writeFileSync("/message.json",JSON.stringify(message),{encoding:'utf8',flag:'w'})
})


app.listen(port,()=>{
    console.log("listen")
})
