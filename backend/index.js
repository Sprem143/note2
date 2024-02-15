const express = require('express');
const app = express();
const OpenAI= require('openai');
require("dotenv").config();
const openai = new OpenAI({ apiKey: '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' });
const bodyParser = require('body-parser');
const cors = require("cors")
require("./db/config")
const Student = require("./db/Student")
const PORT = process.env.PORT || 5000;
app.use(cors());
app.use(express.json())
app.use(bodyParser.json());
app.post('/signup', async (req, res) => {
  let newStudent = new Student(req.body);
  let result = await newStudent.save();
  console.log(result)
  res.send(result);
})
// login api
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
    //    chat bot ---------------
  app.post('/chatbot',(req,res)=>{
   let question=req.body;
     async function chatbot(question){
      let ans=  JSON.stringify(question);
      console.log(ans);
       res.send(ans)
     }
     chatbot(question);
  })
    async function main(text) {
      const chatCompletion = await openai.chat.completions.create({
        messages: [{ role: 'user', content: 'Say this is a test' }],
        model: 'gpt-3.5-turbo',
        prompt:text,
        max_tokens: 50,
        engine: 'text-davinci-004'
      }).then(response => {
        console.log(response.data.choices[0].text);
      })
      .catch(error => {
        console.error(error);
      });
    }
    main("Who is PM of india");



  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });