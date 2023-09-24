import TweetService from "../services/tweet-service.js";

const tweetService = new TweetService();

export const createTweet = async (req, res) => {
    console.log(req.body)
    try {
        const response = await tweetService.create(req.body);
        return res.status(201).json({
            success : true,
            message : 'Sucessfully created a new tweet',
            data : response,
            err : {}
        });
    } catch (error) {
        // console.log("inside error")
        console.log(error.message)
        return res.status(500).json({
            success : false,
            message : 'something went wrong',
            data : {},
            err : error
        });
    }
}

// export default createTweet;
