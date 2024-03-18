const express=require("express");
const app=express();
const port=8080;

app.use(express.urlencoded({extended:true}));
app.use(express.json());

app.get("/register",(req,res) =>{
    res.send("get response")
})

app.post("/register",(req,res) =>{
    let {user,password}=(req.body);
    res.send(`post response welcome ${user} your passward is ${password}`)
})


app.listen(port,()=>{
    console.log("listining at port",port);
})