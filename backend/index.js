const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require("cors")
require("./db/config")
const Student = require("./db/Student")
const PORT = process.env.PORT || 5000;
app.use(cors());
app.use(express.json())
app.use(bodyParser.json());
// ----------sign up api -------------

app.post('/signup', async (req, res) => {
  let newStudent = new Student(req.body);
  let result = await newStudent.save();
  console.log(result)
  res.send(result);
})

// ----------login api---------

app.post('/signin',async(req,res)=>{
  if(req.body.password && req.body.email){
    const student= await Student.findOne(req.body);
    if(student){
      res.send(student)
    }else{
      res.send({result:'user not found'})
    }
  }else{
    res.send({result:'user not found'})
  }
})

 //    --------- custom api ---chat bot ---------------

 const languageDefinitions = 
  {
    java: 'Java is a programming language and computing platform that is designed for use in distributed computing environments.',
    python:"Python is high level language",
    react:"React is use for frontend",
    bootstrap:"Bootstrap is a powerful, feature-packed frontend toolkit. Build anything—from prototype to production—in minutes"
  }

  app.post('/chatbot',(req,res)=>{
  //  let question=req.body;
   let ans=  JSON.stringify(req.body);
   ans=ans.toLowerCase();
  //  if(ans.includes('use') && ans.includes('java')){
  //   const useJava=languageDefinitions.useJava;
  //   console.log(useJava)
  //     res.json({useJava})
  //  }
       if(ans.includes('java')){
        const definition= languageDefinitions.java;
        res.json({definition})
        // console.log({definition})
      }else if(ans.includes('python')){
       console.log(languageDefinitions.python)
       const definition= languageDefinitions.python;
          res.json({definition})
      }else if(ans.includes('bootstrap')){
        const definition=languageDefinitions.bootstrap
        res.json({definition})
      }
     else{
      console.log("ans not found")
      res.json("Answer not found. Search in other way")
     }
    
  })
  // ----------chat gpt-3.5 turbo api ------------
  // import OpenAI from 'openai';

  // const openai = new OpenAI({
  //   apiKey: process.env['OPENAI_API_KEY'], // This is the default and can be omitted
  // });
  
  // async function main() {
  //   const chatCompletion = await openai.chat.completions.create({
  //     messages: [{ role: 'user', content: 'Say this is a test' }],
  //     model: 'gpt-3.5-turbo',
  //     prompt:text,
  //   });
  // }
  
  // main();


// -----port -------------
  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });