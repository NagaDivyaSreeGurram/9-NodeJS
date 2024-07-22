//read the data form file
const myfs=require("fs");//welcome to node js
 const mybuf_data=myfs.readFileSync("myData.txt");
console.log(mybuf_data);