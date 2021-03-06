//Utilities
const url = require('url')
const http = require('http');
const { StringDecoder } = require('string_decoder');

//Models
const request = require('./Models/requestModel.js')
const coordinates = require('./Models/coordinatesModel.js')

//Database
const databaseConnection = require('./DB/connection.js')

//variables
const decoder = new StringDecoder('utf-8')

var server = http.createServer((req , res) => {

    var buffer = "";
    try{
        var {Url , path , method} = request(req , url)
    }catch(e){
        console.log(e);
    }

    req.on('data' , (data) => {buffer += decoder.write(data)})

    req.on('end' , async () => {

        if(buffer != ""){

            try{
                const {latitude , longitude} = coordinates(JSON.parse(buffer))
                await databaseConnection.connect()
                await databaseConnection.close()
                res.end("Done")

            }catch(e){
                res.write("Error : " + e)
                res.end()
            }
        }
        else{
            res.end("Opps No response")
        }
    })


})

server.listen(3000 , () => console.log("server listening at port : " + 3000))