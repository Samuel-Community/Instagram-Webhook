const {get, post} = require("axios");
const sesi = "sessionid"; //instagram.com
const path = require('path');
const {readFileSync, writeFileSync} = require('fs');

console.log('Instagram Webhook Start')

setInterval(function() {

    let current = {}
    try { current = JSON.parse(readFileSync(path.join(__dirname, 'current.json'), 'utf8')) } catch(e) {}

    get(`https://instagram.com/TutoRapide/?__a=1`, { headers: { 
        cookie: `sessionid=${sesi}` 
    }
}).then(async (res) => {

     try {

         let latest = await res.data.graphql.user.edge_owner_to_timeline_media.edges[0].node.shortcode
  
         if (latest === current) return
  
         current = latest

         console.log( latest === current)

        await post('urlwebhook', {
             "username": res.data.graphql.user.full_name,
             "avatar_url": res.data.graphql.user.profile_pic_url_hd,
             "embeds": [
                 {
                     title: `New post by ${res.data.graphql.user.full_name}`,
                     color: `15258703`,
                     url: `https://www.instagram.com/p/${res.data.graphql.user.edge_owner_to_timeline_media.edges[0].node.shortcode}`,
                     description: res.data.graphql.user.edge_owner_to_timeline_media.edges[0].node.edge_media_to_caption.edges[0].node.text,
                     author: {
                         name: res.data.graphql.user.full_name,
                         icon_url: res.data.graphql.user.profile_pic_url_hd
                     },
                     image: {
                         url: res.data.graphql.user.edge_owner_to_timeline_media.edges[0].node.display_url
                     }
                 }
             ],
         });
         
     } catch (error) {
         
     }
     writeFileSync(path.join(__dirname, 'current.json'), JSON.stringify(current), 'utf8')
     console.log('ok actu')
    });

}, 20000)