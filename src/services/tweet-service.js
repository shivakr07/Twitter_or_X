const { TweetRepository } = require('../repository/index')

class TweetService {
    constructor() {
        this.tweetRepository = new TweetRepository();
    }
    
    async create(data) {
        const content = data.content;
        const tags = content.match(/#[a-zA-Z0-9_]+/g); // this regex extracts hashtags
        tags = tags.map((tag) => tag.substring(1));
        console.log(tags);
        const tweet = await this.tweetRepository.create(data);
        //todo create hashtags and add here
        /**
         * 1 . bulkcreate in mongoose 
         * 2 . filter the title of hashtag based on multiple tags
         * 3 . How to add tweet id inside all the hashtags
         * which one is most expensive ? among these
         * -> 2nd one because it is a search  query and once it get optimize 
         * then 3rd one will be automatically optimized
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