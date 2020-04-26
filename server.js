const express=require('express')
const port=process.env.PORT || 8080
const app=express()

app.use(express.static(__dirname + "/build"));
// console.log(__dirname)

app.get(/.*/,function(req,res){
	res.sendFile(__dirname + "/build/index.html");
})

app.listen(port);

console.log("Server Started...")