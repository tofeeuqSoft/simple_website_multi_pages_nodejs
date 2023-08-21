let fs= require('fs');
let http= require('http');

let server=http.createServer(function (req, res) {

    if(req.url=="/"){
        let data=fs.readFileSync('home.html','utf8')
        res.end(data);
    }

    else if(req.url=="/about"){
    let data=fs.readFileSync('about.html','utf8')
    res.end(data);
    }
    else if(req.url=="/tarm"){
    let data=fs.readFileSync('tarm.html','utf8')
    res.end(data);

    }
    else if(req.url=="/contact"){
    let data=fs.readFileSync('contact.html','utf8')
    res.end(data);
    }

});
server.listen(5050);
console.log("server run..");