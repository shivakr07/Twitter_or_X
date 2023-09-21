const Hashtag = require('../models/hashtags');

class HashtagRepository {
    async create(data) {
        try{
            const tag = await Hashtag.create(data);
            return tag;
        } catch (error){
            console.log(error);
        }
    }

    async bulkCreate(data) { // we will use function insertmany 
        try{
            const tags = await Hashtag.insertMany(data); 
            return tags;
            //data is array of objects
        } catch (error) {
            console.log(error)
        }
    }

    async get(id) {
        try{
            const tag= await Hashtag.findById(id);
            return tag;
        } catch (error){
            console.log(error);
        }
    }

    async destroy(id){
        try{
            const response = await Hashtag.findByIdAndRemove(id);
            return response;
        } catch (error){
            console.log(error);
        }
    }

    async findByName(titleList) { // we will be getting array data here
        try {
            const tags = await Hashtag.find({
                title : titleList
            });
            // }).select("title -_id");
            // if you don't want the id then you can do select('title' - '_id')
            return tags;
        } catch(error) {
            console.log(error);
        }
    }
}

module.exports = HashtagRepository;

