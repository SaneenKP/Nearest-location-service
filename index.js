const url = require('url')
const request = require('./Models/requestModel.js')
const http = require('http');
const { StringDecoder } = require('string_decoder');

var decoder = new StringDecoder('utf-8')

var server = http.createServer((req , res) => {

    var buffer = "";
    try{
        var {Url , path , method} = request(req , url)
    }catch(e){
        console.log(e);
    }

    req.on('data' , (data) => {
        buffer += decoder.write(data)
    })
    req.on('end' , () => {

        if(buffer != "")
            res.end(buffer)
        else
            res.end("No response")
    })


})

server.listen(3000 , () => console.log("server listening at port : " + 3000))