const fs=requied("fs");
const bioData = {
    name : "Rajesh",
    age : 24,
    skill : "NodeJs Programmer"
}
console.log(bioData);
  const jsonData = JSON.stringify(bioData);
  fs.writeFile("testjson.json",jsonData,(err) =>{
    console.log("Process Completed....");
  })