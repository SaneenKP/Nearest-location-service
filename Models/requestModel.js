var request = (req , url) => {

    var parsedUrl = url.parse(req.url , true)
    var path= parsedUrl.pathname.replace(/^\/+|\/+$/g , "")
    var method= req.method

    if(parsedUrl == null || parsedUrl == undefined)
        throw new Error("Invalid URL !")

    if(path == null || path == undefined)
        throw new Error("Invalid path or query string !")
    
    if(method != 'POST')
        throw new Error("Invalid method !")

    return {
        Url:parsedUrl,
        path: path,
        method: method
    };

}

module.exports = request