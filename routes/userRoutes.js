
const express = require('express');
const tourController = require('./../controllers/userControllers')
const authController = require('./../controllers/authController')



  const router = express.Router();
  

  router.post('/signup', authController.signup);

  router.route('/')
  .get(tourController.getAllUsers)
  .post(tourController.createUser)
 
  router.route('/:id')
  .get(tourController.getUser)
  .patch(tourController.updateUser)
  .delete(tourController.deleteUser)


  module.exports =  router;
  