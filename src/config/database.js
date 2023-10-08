import mongoose from 'mongoose';
export const connect = async() => {
    await mongoose.connect("mongodb+srv://iamevans:horcrux@cluster0.rczoqnd.mongodb.net/twitter_Dev/");
}








