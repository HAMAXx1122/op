const Discord = require("discord.js-selfbot-v13"); 
const client = new Discord.Client({
    intents: [Discord.Intents.FLAGS.GUILDS], 
   checkUpdate: false, 
});
client.on('ready', async () => {
  console.log(`${client.user.username} is ready!`);
})
const {userAccount} = require("sphinx-run");
new userAccount(client, Discord).leveling({
    channel: '1124067498413789235',
    randomLetters: false, 
    time: 6000, //time
    type: 'ar' //lang
});
client.login("NjAzMjI3MTU0OTY4MzQ2NjI0.G-JyGa.k9P6KsYQS2luX1Dfp4gP_4w_qhA8NBOYQeolgA");

const express = require("express");
const app = express();
app.listen(() => console.log("Server started"));

app.use('/ping', (req, res) => {
  res.send(new Date());
});
