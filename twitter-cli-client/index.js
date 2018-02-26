var Twit = require('twit')

require('dotenv').config()

var T = new Twit({
  consumer_key:         process.env.CONSUMER_KEY, 
  consumer_secret:      process.env.CONSUMER_SECRET,
  access_token:         process.env.ACCESS_TOKEN,
  access_token_secret:  process.env.ACCESS_TOKEN_SECRET,
  timeout_ms:           60*1000,  // optional HTTP request timeout to apply to all requests.
})


/** Search ----
const searchTerm = process.argv[2] || 'news';

T.get('search/tweets', { q: `${searchTerm} lang:ml`, count: 110 }, function(err, data, response) {

    if(data.statuses && data.statuses.length) {
        data.statuses.map((tweet) => {
            //console.log(Object.keys(tweet))
            console.log('---------------------------------------')
            console.log(tweet.text) 
            console.log('---------------------------------------')
        })

    }
})

/**/

/** Stream 
var stream = T.stream('statuses/filter', { track: 'news',language: 'en' })

stream.on('tweet', function (tweet) {
  console.log('▶',tweet.text)
})

*/


// const searchTerm = process.argv[2] || 'news';
// var stream = T.stream('statuses/filter', { track: `${searchTerm}`,language: 'en' })

// stream.on('tweet', function (tweet) {
//   console.log('⚡ ▶ ',tweet.text)
// })



// const searchTerm = process.argv[2] || 'news';
// const searchCount =  process.argv[3]|| 5;


// T.get('search/tweets', { q: `${searchTerm} lang:en`, count: searchCount }, function(err, data, response) {

//     if(data.statuses && data.statuses.length) {
//         data.statuses.map((tweet) => {
//             //console.log(Object.keys(tweet))
//             console.log('⚡ ▶ ',tweet.text) 
//         })

//     }
// })

// Post Status

const statusText = process.argv[2] || 'Bot ⚡';


T.post(
    'statuses/update',
    { status: statusText },
    (err, data, response) => {
      console.log(err, data, response);
    }
  )