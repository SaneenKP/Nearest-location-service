export var request = (req , url) => {
    return{
        url: url.parse(req.url , true),
        method: req.method.toUpperCase(),
        path: url.pathname.replace(/^\/+|\/+$/g,""),
    }
}