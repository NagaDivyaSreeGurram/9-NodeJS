//readfile.js
const fs = require('fs');
fs.readFile('myramdata.txt','utf8',(err,data)=>{
    if(err){
        console.error(err);
        return;
    }
    console.log(data);
});