import express from "express";
import bodyParser from "body-parser";

import { connect }  from './config/database.js';

import apiRoutes from './routes/index.js'

import UserRepository from "./repository/user-repository.js";
import TweetRepository from "./repository/tweet-repository.js";
import LikeService from "./services/like-service.js"

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended : true}));

app.use('/api', apiRoutes);


// import service from './services/tweet-service.js'


// import TweetRepository from './repository/index';
// import TweetService from './services/tweet-service';

app.listen(3000, async () => {
    console.log("server started");
    await connect();
    console.log('mongodb connected');
    // let serv = new service();
    // await serv.create({
    //     content : 'Captial #CODE and #Updating'
    // })



// this is the am
    
    // let's try to create a tweet after service
    /* 
    const service = new TweetService();
    const tweet = await service.create({
        // content : 'i am #excited and it is going to be #fun #newjob and #lovelife'
        // content : 'i am #excited and going to do #fun  #coding'
        content : 'my #working twitter ?'
    });
    console.log(tweet); // only tag processing should be created as others are already in our db
    */


    //  lets try findByName()
    // let repo = new HashtagRepository();
    // const response = await repo.findByName(['Trend', 'Excited']);
    // console.log(response);

    // const userRepo = new UserRepository();
    // const tweetRepo = new TweetRepository();
    // const tweets = await tweetRepo.getAll(0, 10);
    // console.log(tweets);

    // const user = await userRepo.create({
    //     email : 'Evans@admin.com',
    //     password : '123456',
    //     name : 'Evans'
    // });
    // // now we have user with thsi and we want to create like with this
    // const likeService = new LikeService();
    // await likeService.toggleLike(tweets[0].id, 'Tweet', user.id);

});

