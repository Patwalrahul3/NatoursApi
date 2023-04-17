const express = require('express')
const morgan = require('morgan')
const AppError = require('./utils/appErro')
const globalErrorHandler = require('./controllers/errorController')
const userRoute = require('./routes/userRoutes')
const tourRoute = require('./routes/tourRoutes')

const app = express()

if (process.env.NODE_ENV === 'development') {
  app.use(morgan('dev'));
}

app.use(express.json());

 app.use('/api/v1/tours', tourRoute);
 app.use('/api/v1/users', userRoute);

 app.all('*', (req, res, next) =>{
  next(new AppError(`Can't find ${req.originalUrl} on the server!`, 404 ));
})



 app.use(globalErrorHandler);



module.exports = app;



