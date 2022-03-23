const app = require(`express`)();
const PORT = 8080


app.listen(
PORT,

() => console.log(`api on https://locallhost:${PORT}`)

)











const sf = require('snekfetch');
const fs = require('fs');
const https = require('https');
const { title } = require('process');






    
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
        

   


app.get(`/api/femyiff`, (req, res) => {
  console.log(`requested /api/femyiff`)
res.status(200).send({
image: (image),
link: (link),
title: (title),
info: (`api request complete`),

})

});
}
)

    })



    
    

app.get('/' , (reg, res) => {
  console.log(`api request to root folder`)
res.send({
info: (`yata api is curently still in development`),
about: (`this api is build uppon the discord music bot `)

})
})


app.get('/api', (reg, res) => {
  console.log(`api request basic up time chek`)
res.send({
info: 'api active'
})
}) 



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
    




app.get(`/api/yiffinhell`, (req, res) => {
  console.log(`request from /api/yiffinhell`)
res.status(200).send({
image: (image),
link: (link),
title: (title),
info: 'api request complete'

})

});
}
)

})


  



app.get('/api/hell', (req, res) => {
  console.log(`request at /api/hell`)
res.send({
originalurl: (`https://www.reddit.com/r/yiffinhell/comments/tctmse/interesting_instagram_ad_i_got/`),
source: (`https://www.reddit.com/r/yiffinhell`)

})

})


app.get('/api/jokes/bottomlist', (req, res) => {
console.log(`bottom list requested`)
  res.send({
  1: (`Boli`),
  2: (`Scynthi`),
  3: (`villager number 96`)


  })

})

https.get("https://www.reddit.com/r/yiff/.json?limit=100", result => {
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
  





app.get('/api/jokes/yiff', (req, res) => {
  console.log(`api request at /api/jokes/yiff`)
  res.send({
    image: (image),
    title: (title),
    link: (link),
    info: (`youve became a furry today`)

  })

});
}
)

})







      //false errors due to typescript this api is working