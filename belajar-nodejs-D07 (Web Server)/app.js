const http = require('http');
const fs = require('fs')
const Port = 3000
const RenderHTML = (path, res) => {
        fs.readFile(path, (err, data) => {
            if(err){
                res.writeHead(404);
                res.write('Error');
            }else {
                res.write(data);
            }

            res.end();
        })
}

http.createServer((req, res)=>{
    res.writeHead(200,{
        'Content-Type' : 'Text.html',
    }); 

    const url = req.url;
    if(url === '/about'){
        RenderHTML('./about.html', res)
    }else if(url=== '/contact'){
        RenderHTML('./contact.html',res)
    }else{
        RenderHTML("./index.html", res)
    }

    
}).listen(Port, ()=>{
    console.log(`Server is listening on port ${Port}...`);
});

