const createIndex = async (client , databaseName , collectionName , index , callback) => {

    var result = ""
    try{
        result = await client.db(databaseName).collection(collectionName).createIndex(index)
    }catch(e){
        throw new Error("MongoDB Indexing Error : " + e)
    }
    return result
}

module.exports = createIndex