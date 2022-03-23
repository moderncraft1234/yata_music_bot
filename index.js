const {token, prefix, botlogs, secondhandlogsvar, yuckywucky, nhubbotid, mainbot, betabot } = require(`./config.json`);

const { Client, Intents } = require("discord.js");
const client = new Client({
    restTimeOffset: 0,
    shards: "auto",
    intents: 641,
  });

  const {dependencies} = require(`./package.json`)

const { Player, Queue } = require("discord-player");
const playdl = require("play-dl");
const { AudioFilters } = require("discord-player");

const sf = require('snekfetch');
const fs = require('fs');
const https = require('https')


const {fetchSubreddit} = require('fetch-subreddit');
 
fetchSubreddit('yiffinhell')
  .then((urls) => console.log(pretty(urls)))
  .catch((err) => console.error(err));
 
function pretty(obj) {
  return JSON.stringify(obj, null, 2);
}


const { MessageAttachment, MessageEmbed } = require('discord.js');





let helpcmd = new MessageEmbed()
.setAuthor(`bot`)
.setDescription(`this bot is intended as a music bot with other features to start by using ${prefix}play to play any song also make sure to join a vc channel before using the command`)
.setFooter(`discord.js`)




    




    client.on('message', message => {
    let infocmd = new MessageEmbed()
   
    .setDescription(`for the nerds out there this bot is coded on discord.js v13 wich is curently the most updated api`)
    .setAuthor(`bot`)
    .setFooter(`epic`)


  
        if(message.content.startsWith(`${prefix}info`)) {
        message.channel.send({ embeds: [infocmd] });
    }
})

client.on('message', message => {
    let commands1 = new MessageEmbed()
     
    .setAuthor(`bot commands`)
    .setDescription(`${prefix}play,. ${prefix}volume,. ${prefix}help.,${prefix}stop,.${prefix}pause,.${prefix}yiff,.${prefix}history.,${prefix}dupe.,${prefix}highway.,${prefix}9b9t.,${prefix}thisbot.,${prefix}boost-on.,${prefix}boost-off.,${prefix}yiffinhell.,${prefix}femyiff.,${prefix}furryirl.,`)
    .setFooter(`more commands soon`)
     if(message.content.startsWith(`${prefix}commands`)) {    
    message.channel.send({ embeds: [commands1]})
     }
})


client.on('message', message => {

let bassenable = new MessageEmbed()

.setAuthor(`bass`)
.setDescription(`bassboost enabled requested by ${message.author} `)
.setFooter(`BASS`)

if(message.content.startsWith(`${prefix}boost-on`)) {    
  message.channel.send({ embeds: [bassenable]})
  const queue = player.getQueue
  if (!queue || !queue.playing) return void message.channel.send(`epic`)
queue.setFilters({
      bassboost: !queue.getFiltersEnabled().includes("bassboost"),
  });
   }
})



client.on('message', message => {

  let bassdisable = new MessageEmbed()
  
  .setAuthor(`bass`)
  .setDescription(`bassboost disabled by ${message.author}`)
  .setFooter(`BASS`)
  
  if(message.content.startsWith(`${prefix}boost-off`)) {    
    message.channel.send({ embeds: [bassdisable]})
    const queue = player.getQueue
    if (!queue || !queue.playing) return void message.channel.send(`why u stopped the boost`)
queue.setFilters({
      normalizer2: !queue.getFiltersEnabled().includes("bassboost")
  })
    }});



          
          
              
            
    
  
  




const player = new Player(client, {
  leaveOnEnd: true,
  leaveOnStop: true,
  leaveOnEmpty: true,
  leaveOnEmptyCooldown: 5000,
  autoSelfDeaf: true,
  initialVolume: 50,
  bufferingTimeout: 3000,
});
module.exports = { player, client };
client.on("ready", () => {
  console.log(`musicthingonline`);
  client.user.setActivity("use =commands", { type: "LISTENING" });
});
require('./events')(client)
client.on("messageCreate", async (message) => {
  if (!message.guild || message.author.bot) return;
  if (!message.content.startsWith(prefix)) return;

  let args = message.content.slice(prefix.length).trim().split(" ");
  let cmd = args.shift()?.toLowerCase();

  require("./commands")(client, message, cmd, args);
  require("./explicit")(client, message, cmd, args);
  require("./extra")(client, message, cmd, args);
  require("./e621")(client, message, cmd, args);
});
 




client.on('message', message => {
if(message.content.startsWith(`${prefix}yiffinhell`)) {  

https.get("https://www.reddit.com/r/yiffinhell/.json?limit=100", result => {
  var body = '';
  result.on('data', chunk => {
    body += chunk;
  });

  result
    .on('end', () => {
      var response = JSON.parse(body);
      var index = response.data.children[Math.floor(Math.random() * 99) + 1].data;
      var link = 'https://reddit.com/' + index.permalink;
      var image = index.preview.images[0].source.url.replace('&amp;', '&');
      var title = index.title;

      let helloop = new MessageEmbed()
        .setTitle(title)
        .setImage(image)
        .setColor("2ac9f5")
        .setURL(link)
        .setTimestamp();

      message.channel.send({ embeds: [helloop]});
    })
    .on('error', function (e) {
      return console.log(e);
    });
});
}
})







client.on('message', message => {
  if(message.content.startsWith(`${prefix}femyiff`)) {  
  
  https.get("https://www.reddit.com/r/femyiff/.json?limit=100", result => {
    var body = '';
    result.on('data', chunk => {
      body += chunk;
    });
  
    result
      .on('end', () => {
        var response = JSON.parse(body);
        var index = response.data.children[Math.floor(Math.random() * 99) + 1].data;
        var link = 'https://reddit.com/' + index.permalink;
        var image = index.preview.images[0].source.url.replace('&amp;', '&');
        var title = index.title;
  
        let femyiffcmd = new MessageEmbed()
          .setTitle(title)
          .setImage(image)
          .setColor("2ac9f5")
          .setURL(link)
          .setTimestamp();
  
        message.channel.send({ embeds: [femyiffcmd]});
      })
      .on('error', function (e) {
        return console.log(e);
      });
  });
  }
  })



  client.on('message', message => {
    if(message.content.startsWith(`${prefix}furryirl`)) {  
    
    https.get("https://www.reddit.com/r/furry_irl/.json?limit=100", result => {
      var body = '';
      result.on('data', chunk => {
        body += chunk;
      });
    
      result
        .on('end', () => {
          var response = JSON.parse(body);
          var index = response.data.children[Math.floor(Math.random() * 99) + 1].data;
          var link = 'https://reddit.com/' + index.permalink;
          var image = index.preview.images[0].source.url.replace('&amp;', '&');
          var title = index.title;
    
          let furryirlyes = new MessageEmbed()
            .setTitle(title)
            .setImage(image)
            .setColor("2ac9f5")
            .setURL(link)
            .setTimestamp();
    
          message.channel.send({ embeds: [furryirlyes]});
        })
        .on('error', function (e) {
          return console.log(e);
        });
    });
    }
    })
 

    client.on('message', message => {
      if(message.content.startsWith(`${prefix}FastTrackTf`)) { 
     
      https.get("https://e621.net/posts?tags=fasttrack37d.json?limit=100", result => {
        var body = '';
        result.on('data', chunk => {
          body += chunk;
        });
      
        result
          .on('end', () => {
            var response = JSON.parse(body);
            var index = response.data.children[Math.floor(Math.random() * 99) + 1].data;
            var link = 'https://e621.net/' + index.permalink;
            var image = index.preview.images[0].source.url.replace('&amp;', '&');
            var title = index.title;
      
            let esixtwooneone = new MessageEmbed()
              .setTitle(title)
              .setImage(image)
              .setColor("2ac9f5")
              .setURL(link)
              .setTimestamp();
      
            message.channel.send({ embeds: [esixtwooneone]});
          })
          .on('error', function (e) {
            return console.log(e);
          });
      });
      }
      

})



client.on('message', message => {
  if(message.content.startsWith(`${prefix}9b9tpost`)) {  
  
  https.get("https://www.reddit.com/r/9b9t/.json?limit=100", result => {
    var body = '';
    result.on('data', chunk => {
      body += chunk;
    });
  
    result
      .on('end', () => {
        var response = JSON.parse(body);
        var index = response.data.children[Math.floor(Math.random() * 99) + 1].data;
        var link = 'https://reddit.com/' + index.permalink;
        var image = index.preview.images[0].source.url.replace('&amp;', '&');
        var title = index.title;
  
        let bestanarchyserver = new MessageEmbed()
          .setTitle(title)
          .setImage(image)
          .setColor("2ac9f5")
          .setURL(link)
          .setTimestamp();
  
        message.channel.send({ embeds: [bestanarchyserver]});
      })
      .on('error', function (e) {
        return console.log(e);
      });
  });
  }
  })


//dev token `OTUxOTA1NjMyOTEzNjAwNTcz.YiuRNA.x1uCMM-UYe-Pa3S3Bf9bOcgMiKE`


client.login(token)