const {MongoClient} = require('mongodb')

const createIndex = require('./createIndex.js');

//Indexing Query
const indexQuery = require('./Entities/indexes.js');

//Database Constrains
const databaseName = "sample_location"
const collectionName = "UsersAndLocations"
const uri = 'mongodb+srv://test:0kUkd360hKNaraDd@location-testing.mny1q.mongodb.net/myFirstDatabase?retryWrites=true&w=majority'

//variables
const client = new MongoClient(uri)
const indexQueryString = "location"

const connect = async () => {

    try{
        await client.connect()
        console.log("MongoDB connected !");

        await setIndex()

    }catch(e){
        throwError(e);
    }
    return client
}

const setIndex = async () => {
    try{
        const index = indexQuery(indexQueryString)
        const indexStatus = await createIndex(client , databaseName , collectionName , index) 
        if(indexStatus != ""){
            console.log("MongoDB index Created : " + indexStatus);
        }
    }catch(e){
        throwError(e)
    }
}

const close = async () => {

    try{
        await client.close();
        console.log("MongoDB connection close !");
    }catch(e){
        throwError(e)
    }
}

const throwError = (e) => {
    throw new Error("Mongo Error : " + e)
}

module.exports = {connect , close}