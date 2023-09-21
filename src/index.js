const express = require("express");

const connect = require('./config/database');
const app = express();

const TweetRepository = require('./repository/index');
const TweetService = require('./services/tweet-service');

app.listen(3000, async() => {
    console.log("server started");
    await connect();
    console.log('mongodb connected');
    
    // let's try to create a tweet after service
    const service = new TweetService();
    const tweet = await service.create({
        // content : 'i am #excited and it is going to be #fun #newjob and #lovelife'
        // content : 'i am #excited and going to do #fun  #coding'
        content : 'my #working twitter ?'
    });
    console.log(tweet); // only tag processing should be created as others are already in our db



    //  lets try findByName()
    // let repo = new HashtagRepository();
    // const response = await repo.findByName(['Trend', 'Excited']);
    // console.log(response);

})

