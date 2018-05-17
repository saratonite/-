require('dotenv').config()
const twitter = require('twitter');

/**
 * 🔥 Twitter 🐤🐤 API Keys and Tokens ⌛
 */
const config = {
    consumer_key : process.env.CONSUMER_KEY,
    consumer_secret : process.env.CONSUMER_SECRET,
    access_token_key : process.env.ACCESS_TOKEN,
    access_token_secret: process.env.ACCESS_TOKEN_SECRET
}

// 💥 Initialize  🐤 twitter using config
const T = new twitter(config);

// Set up Search Parameters

let searchText = process.argv[2] || '#javascript';

let searchCount = process.argv[3] || 5;

const searchParams = {
    q: searchText,
    count: searchCount,
    result_type: 'popular',
    lang: 'en'
}

// Let send the search request

console.log(`🔥🔥🔥🔥 Searching ... ${searchParams.q}  🐤🐤🐤`)

T.get('search/tweets', searchParams, (err, data, res) => {
    if(err) {
        console.log('> 😕 Whooops!!! Some error 😈', err)
        return;
    } 

    // Cool 😎

    //console.log('😛 ', data)

    if(data.statuses) {
        data.statuses.forEach(status => {
            let id = status.id_str;

            if( status.retweet_count < 50 && status.favorite_count < 200) return; 

            T.post('favorites/create', {id:id}, (err, response) => {
                if(err) {
                    console.log('📵 Cant favorite tweet!!!, ', err[0].message)
                }
                else {
                    let username = response.user.screen_name;
                    let tweetId = response.id_str;
                    console.log('💓 Favorited: ', `https://twitter.com/${username}/status/${tweetId}`)
                }
            })
        });
    }


})