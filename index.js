/*const Insta = require('scraper-instagram');
const InstaClient = new Insta();

InstaClient.authBySessionId('45331080708%3AekXzJ24PhAhIPz%3A28')
	.then(account => console.log(account))
	.catch(err => console.error(err));

  InstaClient.getProfile('tutorapide')
	.then(profile => console.log(profile))
	.catch(err => console.error(err));


*/


const {post, get} = require('axios');

get("https://api.instagram.com/v1/users/119911386621358/media/recent",{
headers: {
    "Content-Type": "application/json"
}
}).then((res) => {
    console.log(res.data)
});




/*const fetch = require('node-fetch')
fetch('https://www.instagram.com/tutorapide/?__a=1')

.then(res => res.json())
.then((json) => {
  console.log(json);


})*/

/*fetch('https://www.instagram.com/tutorapide/?__a=1', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      username: json.graphql.user.full_name
    }),

}).then(res => res.json())
  .then(json => console.log(json));*/

