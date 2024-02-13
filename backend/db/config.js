const mongoose= require('mongoose')
mongoose.connect("mongodb://localhost:27017/Ducatestudent",{
   family:4
})
console.log("connected to mongodb")