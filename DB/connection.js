const {MongoClient} = require('mongodb')

const createIndex = require('./createIndex.js');

//Indexing Query
const indexQuery = require('./Entities/indexes.js');
const index = indexQuery("location")


//Database Constrains
const databaseName = "sample_location"
const collectionName = "UsersAndLocations"
const uri = 'mongodb+srv://test:0kUkd360hKNaraDd@location-testing.mny1q.mongodb.net/myFirstDatabase?retryWrites=true&w=majority'

const connect = async () => {

    const client = new MongoClient(uri)
    try{

        await client.connect()
        console.log("MongoDB connected !");

        const indexStatus = await createIndex(client , databaseName , collectionName , index) 
        if(indexStatus != ""){
            console.log("MongoDB index Created : " + indexStatus);
        }

    }catch(e){
        console.log("Mongo Error: " + e);
    }finally{

        await client.close()
        console.log("MongoDB client closed !");
    }
    return client
}


module.exports = connect