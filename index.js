const telegramAPI = require('node-telegram-bot-api')
const fs = require('fs')
let Object = {
  users:{},
  lid:{}
}
try{
let message = JSON.parse(fs.readFileSync("/message.json",{encoding:'Utf8'}))
}
catch{
  fs.writeFileSync("/message.json",JSON.stringify(Object),{encoding:'utf8',flag:'w'})
  console.log(Object)
  let message = JSON.parse(fs.readFileSync("/message.json",{encoding:'Utf8'}))
  console.log(message)
}
const token = '5749086938:AAHlP5Rg63kqmdHprVu4GOvLFBMY00e6oss'

const bot = new telegramAPI(token,{polling:true})
bot.on('message',async msg=>{
  message = JSON.parse(fs.readFileSync("/message.json",{encoding:'Utf8'}))
    bot.on("polling_error", console.log)
      switch(msg.text){
        case "/start":
          console.log("command:start")
          try{
            usTg = msg.chat.username
            let obj={
              nick:"",
              us:msg.chat.username,
              value:0,
              coins:0
            }
            if(message.users[usTg]==null){
            message.users[usTg] = obj
            message.users[usTg].value+=1000
            }
            else{
              message.users[usTg].value+=1000
            }     
            fs.writeFileSync("/message.json",JSON.stringify(message),{encoding:'utf8',flag:'w'})
            sendMes(msg,"print /buy")
          }
          catch(error ){
            console.log(error)
            bot.sendMessage(msg.chat.id,"you account is not find")
          }
        break
      case "/buy":
        bot.sendInvoice(
          msg.chat.id,
          "Unlock feature X", "Will give you access to feature X of this bot", "unlock_X", "",
          "XTR", [
            {
              label: 'Подписка',
              amount: 1
            }
        ],
        )
        bot.on('pre_checkout_query', async ctx => {
          try {
              await bot.answerPreCheckoutQuery(ctx.id, true);
          }
          catch(error) {
              console.log(error);
          }
      })
      bot.on('successful_payment', async ctx => {
        try {
          bot.sendMessage(ctx.chat.id,"thank you")
          usTg = msg.chat.username
          usTg = msg.chat.username
            let obj={
              nick:"",
              us:msg.chat.username,
              value:0,
              coins:0
            }
            if(message.users[usTg]==null){
            message.users[usTg] = obj
            message.users[usTg].value+=1000
            }
            else{
              message.users[usTg].value+=1000
            }     
            fs.writeFileSync("/message.json",JSON.stringify(message),{encoding:'utf8',flag:'w'})
        }
        catch(error) {
            console.log(error);
        }
    })
      break
  }
})

async function sendMes(msg,messa) {
  bot.sendMessage(msg.chat.id,messa)
}
