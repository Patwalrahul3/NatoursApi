const mongoose = require('mongoose')
const dotenv = require('dotenv')
dotenv.config({path: './config.env'})

const app = require('./app')

console.log("database", process.env.DATABASE);

mongoose.connect(process.env.DATABASE, {
  useNewUrlParser: true,
  useCreateIndex: true,
  useFindAndModify: false
}).then(con =>{
  console.log("database successfully connected....");
})





 // start server
 const port = process.env.PORT;
 app.listen(port, ()=> {
   console.log(`App runing on ${port}.........`);
 })