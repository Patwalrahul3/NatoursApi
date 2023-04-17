// const fs = require('fs')
// const dotenv = require('dotenv')
// const mongoose = require('mongoose')
// const Tour = require('../../models/tourModel')

// dotenv.config({path: './config.env'})





// console.log("sfgdg ", process.env.DATABASE);
// console.log("sfgdg ", process.env.NODE_ENV);

// mongoose.connect(process.env.DATABASE, {
//   useNewUrlParser: true,
//   useCreateIndex: true,
//   useFindAndModify: false
// }).then(() =>{
//   console.log("database successfully connected....");
// })





// // read Json file
// const tours = JSON.parse(fs.readFileSync(`${__dirname}/tours-simple.json`, 'utf-8'));


// // import data into db

// const importData = async () =>{
//     try{
//     await Tour.create(tours);
//     console.log('data successfully loaded!!');

//     }catch(err){
//         console.log(err);

//     }
// }

// importData()

