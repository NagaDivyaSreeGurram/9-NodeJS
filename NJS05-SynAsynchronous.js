const fs=require("fs");//welcome to node js
 const data=fs.readFileSync("myData.txt","utf-8");
console.log(data);
//fs.readFile("info.txt","utf-8",(err,data)=>{
  //  console.log(data);
//})
fs.readFile("myData.txt","utf-8",(err,data)=>{
    console.log(data);
  })