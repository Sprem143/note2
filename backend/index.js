const express= require('express');
const app=express();
const bodyParser = require('body-parser');
const cors= require("cors")
require("./db/config")
const Student= require("./db/Student")
const PORT = process.env.PORT || 5000;
app.use(cors());
app.use(express.json())
app.use(bodyParser.json());
app.post('/signup',async(req,res)=>{
   let newStudent= new Student(req.body);
        let result= await newStudent.save();
        console.log(result)
      res.send(result);
})
// login api
app.post("/signin", async(req,res)=>{
 
})

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });