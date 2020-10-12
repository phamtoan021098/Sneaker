const express = require('express');
const userRoutes = express.Router();
const userController=require('../controller/user.controller');
userRoutes.route('/view').get(userController.view);
userRoutes.route('/register').put(userController.register);
userRoutes.route('/login').post(userController.login);
userRoutes.route('/detail/:id').get(userController.viewdetail);
userRoutes.route('/delete/:id').get(userController.delete);
module.exports=userRoutes;