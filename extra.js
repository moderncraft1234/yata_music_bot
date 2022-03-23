const {token, prefix, botlogs, secondhandlogsvar, yuckywucky, nhubbotid } = require(`./config.json`);
const { Client, Message } = require("discord.js");

const client = new Client({
    restTimeOffset: 0,
    shards: "auto",
    intents: 641,
  });
  const { MessageAttachment, MessageEmbed } = require('discord.js');

 
  const {dependencies,} = require(`./package.json`)





  module.exports = async (client, message, cmd, args) => {
 
    let twobeetwot = new MessageEmbed()
    
    .setDescription(`dont play 2b2t play 9b9t do ${prefix}9b9t for info`)






    let buyingkits = new MessageEmbed()
 
    .setDescription(`buying kits from a kit shop is usually a scam and in this video u will see why`)
    .setAuthor(`buying kits from shops`)



let furrymom = new MessageEmbed()

.setAuthor('dont fucking watch  :flushed: ')

.setDescription(':flushed:')
.setFooter(':flushed:')



let listofstuff = new MessageEmbed()


.setAuthor(`the bot is using these api's curently`)
.setDescription(`not working`)




      if (cmd === `2b2t`) {
         message.channel.send({ embeds: [twobeetwot]});
      }
      else if (cmd === `protogen`) {
        message.channel.send(`https://c.tenor.com/udHEEVVva6EAAAAC/protogen-proto.gif`)
      }
      else if (cmd === `toaster`) {
        message.channel.send(`https://cdn.upload.systems/uploads/INDo3NaE.mp4`)
      }
      else if (cmd === `kits`) {
     message.channel.send(`https://youtu.be/rAYGFW_Ct-4`)
     message.channel.send({ embeds: [buyingkits]});
      }
      else if (cmd === `horny`) {
      message.channel.send(`https://cdn.upload.systems/uploads/KkU9f8lS.png`)
      }
      else if (cmd === `mommy`) {
   message.channel.send(`https://www.reddit.com/r/yiffinhell/comments/sn9vf4/these_things_are_gone_forever_over_a_long_time_ago/`)
    message.channel.send({ embeds: [furrymom]});
  }
else if (cmd === `apilist`) {
message.channel.send({ embeds: [listofstuff]});

}
 }



  
      