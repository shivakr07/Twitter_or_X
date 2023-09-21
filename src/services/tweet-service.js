const { TweetRepository } = require('../repository/index')
const { HashtagRepository } = require('../repository/index')

class TweetService {
    constructor() {
        this.tweetRepository = new TweetRepository();
        this.hashtagRepository = new HashtagRepository();
    }
    
    async create(data) {
        const content = data.content;
        const tags = content.match(/#[a-zA-Z0-9_]+/g).map((tag) => tag.substring(1)); // this regex extracts hashtags
        // console.log('current tagst',tags);
        const tweet = await this.tweetRepository.create(data);
        //todo create hashtags and add here
        let alreadyPresentTags = await  this.hashtagRepository.findByName(tags);
        console.log(alreadyPresentTags);
        let titleOfPresentTags = alreadyPresentTags.map(tags => tags.title);
        // console.log("already present tags", alreadyPresentTags);
        let newTags = await tags.filter(tag => !titleOfPresentTags.includes(tag));
        newTags = newTags.map(tag => {
            // console.log("Hello", newTags)
            return {title : tag, tweets : [tweet.id]}
        });
        // console.log(newTags)
        const response = await this.hashtagRepository.bulkCreate(newTags);
        // console.log('i am result',response);
        alreadyPresentTags.forEach( (tag) => {
            tag.tweets.push(tweet.id);
            tag.save();
        })

        // todo [{title : 'coding', tweets : []}] 
        // todo [excited, coding, js, career] -> [ excited, career]
        /**
         * 1 . bulkcreate in mongoose 
         * 2 . filter the title of hashtag based on multiple tags
         * 3 . How to add tweet id inside all the hashtags
         */
        return tweet ;
    }
}
 
module.exports = TweetService;


 


/*
   content ->  this is my #first #tweet . I am really #excited
*/
/* 
  now either you can do linear string matching to find the words which //      are appended with '#'
  or character matching
                  or 
  generally in programming we can use regular expression to solve  
  these prolems

*/