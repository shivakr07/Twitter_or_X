const express = require("express");

const connect = require('./config/database');

// const Tweet = require('./models/tweet');
const TweetRepository = require('./repository/tweet-repository');
const Comment = require('./models/comment');
const app = express();

app.listen(3000, async() => {
    console.log("server started");
    await connect();
    console.log('mongodb connected');
    // const tweet = await Tweet.create({
    //     content : 'First tweet',
    //     userEmail : 'abc@mail.com'
    // });
    // console.log(tweet);

    // even we can query the data----------
    // const tweet  = await Tweet.find(  {
    //     userEmail : "abc@mail.com"
    // });
    // console.log(tweet);

    // const tweets  = await Tweet.find();
    // console.log(tweets);

    // const tweet = await Tweet.findById('6500ac185b2361eaa8ef2b78');
    // console.log(tweet);
    // tweet.userEmail = "x@y.com";
    // await tweet.save();
    // console.log(typeof tweet);

    // const tweetRepo = new TweetRepository();
    // const tweet = await tweetRepo.update('6500acb31ac1933597c2746c', 
    //     {content : "finally i am good " } );
    // console.log(tweet);

    // tweet after adding the comment
    // const tweetRepo = new TweetRepository();
    
    // const tweet = await tweetRepo.create({
    //     content : 'tweet with a comment'
    // });
    // console.log(tweet);
    // tweet.comments.push({content : 'first comment'});
    // await tweet.save();
    // console.log(tweet);

    // -> tweet with comment schema <-

    // const tweet = await tweetRepo.create({content : 'Tweet with comment schema'});
    // console.log(tweet);
    // const comment = await Comment.create({content : 'new comment'});
    // tweet.comments.push(comment);
    // await tweet.save();
    // console.log(tweet);

    // -> now get the tweet using id then we see that comment inside printed as object id
    // const tweet = await tweetRepo.getWithComments('650362d4a53bc1476e0d7e96');
    // console.log(tweet);

    // const tweets = await tweetRepo.getAll(0, 4);
    // console.log(tweets);
    // console.log(tweets[0]._id);
    // console.log(tweets[0].id);

    // const tweets = await tweetRepo.getAll(0, 4);
    // console.log(tweets[0].contentWithEmail);

    const tweetRepo = new TweetRepository();
    const tweet = await tweetRepo.create({content : 'now with Hooks'});
    console.log(tweet);

})

