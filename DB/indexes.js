const getIndex = (index) => {

    var indexes = {

        location: {
            "location":"2dsphere"
        }
    }


    //Check if the indexing point is an undefined index.
    if(typeof indexes[index] == "undefined")
        throw new Error("Invalid indexing node !")
    else
        return indexes[index]
}

module.exports = getIndex()