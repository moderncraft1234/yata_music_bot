const {token, prefix, botlogs, secondhandlogsvar, yuckywucky, nhubbotid } = require(`./config.json`);
const { Client, Message } = require("discord.js");
const fs = require('fs');
const https = require('https')
const client = new Client({
    restTimeOffset: 0,
    shards: "auto",
    intents: 641,
  });



  


  const { MessageAttachment, MessageEmbed } = require('discord.js');



  module.exports = async (client, message, cmd, args) => {

    let gay = new MessageEmbed()

    .setDescription(`boli is gay and so is Scynthi`)
    .setAuthor(`very gay ngl`)
    .setTitle('https://i.imgur.com/Y8w6UHbb.jpg')

if (cmd == "gay") {
    
    message.channel.send({ embeds : [gay]});
  }
  
  let becomegay = new MessageEmbed()
 .setAuthor(`ur kinda gay ngl`) 
 module.exports = async (client, message, cmd, args) => {

  if (cmd == "becomegay") {
message.channel.send({ embeds : [becomegay]});

  }
  }
}


