const fs = require('fs');
const http = require('http');
const url = require("url");

http.createServer((req, res) => {
    
    const reqUrl = url.parse(req.url).pathname;
    const search_params = url.parse(req.url,true).query;
    // console.log(reqUrl);
    //console.log( url.parse(req.url,true));
    if(reqUrl.startsWith("/create")) {
        const filename = search_params.filename;
        if(filename){
            if(fs.existsSync(`./${filename}`)) {
                // File already exists
                res.write(`File named ${filename} already exists!`); //write a response to the client
                res.end(); //end the response
            } else {
                // File does not exist, create it
                fs.writeFile(`./${filename}`,"",(err) => {                
                    if (err) {
                        res.write(err.toString()); //write a response to the client
                    } else {
                        res.write(`Create a new empty file named ${filename} !`); //write a response to the client
                    }
                    res.end(); //end the response
                }); 
            }
        }
    } else if (reqUrl.startsWith("/write")){
        const filename = search_params.filename;
        const content = search_params.content;
        // try{
        //     fs.appendFile(`./${filename}`, content);
        //     res.write(`You have append a new message:'${content}' to data.txt !`); //write a response to the client
        // }catch(error){
        //     res.write(error.toString()); //write a response to the client
        // }finally{
        //     res.end(); //end the response
        // }
        if(filename)
        {
            if(!fs.existsSync(`./${filename}`)) {
                // File already exists
                res.write(`No such file or directory, File named ${filename} is not exists, please try to create it first`); //write a response to the client
                res.end(); //end the response
            } else {
                if(content != undefined)
                {
                    fs.appendFile(`./${filename}`, content, (err) => {
                        if (err) {
                            res.write(err.toString()); //write a response to the client
                        } else {                      
                            res.write(`You have append a new message:'${content}' to ${filename} !`); //write a response to the client                       
                        }
                        res.end(); //end the response
                    });
                } else {
                    res.write(`You tried to append undefined content to the ${filename}`); //write a response to the client
                    res.end(); //end the response
                }
            }
        }
        
    } else if (reqUrl === '/read'){
        const filename = search_params.filename;
        if(filename){
            if(!fs.existsSync(`./${filename}`)) {
                // File already exists
                res.write(`No such file or directory, File named ${filename} is not exists, please try to create it first`); //write a response to the client
                res.end(); //end the response
            } else {
                fs.readFile(`./${filename}`,(err,read_data) =>
                {
                    if (err) {
                        res.write(err.toString()); //write a response to the client
                    } else {
                        res.write(read_data); //write a response to the client
                    }
                    res.end(); //end the response

                });
            }
        }
        
    } else if (reqUrl === '/delete'){
        const filename = search_params.filename;
        if(filename){  
            if(!fs.existsSync(`./${filename}`)) {
                // File already exists
                res.write(`No such file or directory, File named ${filename} is not exists, please try to create it first`); //write a response to the client
                res.end(); //end the response
            } else {   
                fs.unlink(`./${filename}`,(err)=>{
                    if (err) {
                        res.write(err.toString()); //write a response to the client
                    } else {
                        res.write(`Successfully delete file ${filename} !`); //write a response to the client
                    }
                    res.end(); //end the response

                    // console.log(err);
                    // console.log("delete file data.txt");
                });
            }
        }
    }
    else
    {
        res.write("Unknown URL, please try a valid URL !");
        res.end();
    }

}).listen(8080); //the server object listens on port 8080