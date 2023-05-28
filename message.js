const fs = require('fs');


modual.exports = function(msg){
    var data;
    fs.writeFile("./node.txt","I like Node !",(err)=>{
        console.log("create a new file named node.txt and write I like Node !");
        console.log(err);
        fs.readFile("./node.txt",(err,readData) =>
        {
            console.log(err);
            console.log("read file node.txt");
            console.log(readData);
            data = readData;
            fs.unlink("./node.txt",(err)=>{
                console.log(err);
                console.log("delete file node.txt");
            });
        });
        //console.log(err);
    });
    return data;
}


// setTimeout(function(){
//     fs.readFile("./node.txt",(err,data) =>
//     {
//         //console.log(err);
//         console.log("read file node.txt");

//         console.log(data);

//     });

// }, 500);
// setTimeout(function(){
//     fs.unlink("./node.txt",(err)=>{
//         console.log("delete file node.txt");
//     });

// }, 1000);
