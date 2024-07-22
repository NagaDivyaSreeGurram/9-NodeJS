const myfs=require("fs");
myfs.writeFileSync("myData.txt","My Node Data Ram");
//replace teh data
myfs.writeFileSync("myData.txt","Welcome to node js data");