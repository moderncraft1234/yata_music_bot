const {token, prefix, botlogs, secondhandlogsvar, yuckywucky, nhubbotid } = require(`./config.json`);
const { Client, Message } = require("discord.js");
const { player } = require(".");

const client = new Client({
    restTimeOffset: 0,
    shards: "auto",
    intents: 641,
  });
  const { MessageAttachment, MessageEmbed } = require('discord.js');

  module.exports = async (client, message, cmd, args) => {
let amogus = new MessageEmbed()

.setAuthor(`if u read this ur the imposter`)
.setDescription(`${message.author} is the imposter`)


  
let popbobsex = new MessageEmbed()

.setAuthor(`popbob`)
.setDescription(`have sex with popbob`)


let highwaycreate = new MessageEmbed()

.setDescription(`in this video u can learn everything about creating highways on any anarchy server`)
.setFooter(`brought to u by the spawn cult`)


let whyushouldplay = new MessageEmbed()

.setAuthor(`9b9t`)
.setDescription(`9b9t is a anarchy server just like 2b2t basicly the same concept as 2b2t only with a playable queue and active owner who works on the server. And the server is a lot like 2b2t becouse the average player size of the server is around 150 daily wich makes it a really active server to. However with this video u will learn about 9b9t and why u should play it`)


let abouthisbot = new MessageEmbed()

.setDescription(`this bot is created in the intent to play music on ur discord server when u are in a vc and provide info on certain topics when u play on an anarchy server this bot can be invited anywhere by using the link the bio of the bot any further more questions regarding the bot goes to "villager number 96#6073" and if u want anything to be added to the bot just dm him `)
.setFooter(`infobot-section`)


if (cmd === "sus") {
message.channel.send({ embeds: [amogus]});

}
else if (cmd === "yiff") {
 message.channel.send(`https://cdn.upload.systems/uploads/7nNItPfG.gif`)   
}
else if  (cmd === `history`) {
message.channel.send(`https://cdn.upload.systems/uploads/4l8BI3wh.mp4`)
}
else if (cmd === "dupe") {
message.channel.send(`https://www.youtube.com/watch?v=5qmpbHQQ_0A`)
message.channel.send({ embeds: [popbobsex]});
}
else if (cmd === "highway") {
 message.channel.send(`https://www.youtube.com/watch?v=AVyAXm1KdRI`) 
 message.channel.send({ embeds: [highwaycreate]});
}  
else if (cmd === "9b9t") {
   message.channel.send(`https://www.youtube.com/watch?v=vVF_s42A-j4&t=4s`)
   message.channel.send({ embeds: [whyushouldplay]});
} 
else if (cmd === `thisbot`) {
message.channel.send({ embeds: [abouthisbot]});
}

}


