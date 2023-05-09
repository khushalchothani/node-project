const http=require('http');
const fs=require('fs');

http.createServer((req,res)=>{

    if(req.url=='/'){
        fs.readFile('index.html','utf-8',(err,data)=>{
            res.write(data);
            res.end();
        })
    }

    else if(req.url=='/about'){
        fs.readFile('aboutus.html','utf-8',(err,data)=>
        {
            res.write(data);
            res.end();
        })
    }
    else if(req.url=='/contact'){
        fs.readFile('contactus.html','utf-8',(err,data)=>
        {
            res.write(data);
            res.end();
        })
    }
    else{
        res.write('404 page');
        res.end();
    }

}).listen('2222',(err)=>{console.log('start')});