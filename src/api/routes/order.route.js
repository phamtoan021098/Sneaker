const express = require('express');
const orderRoutes = express.Router();
const orderController=require('../controller/order.controller');
orderRoutes.route('/').get(orderController.show);
orderRoutes.route('/add').post(orderController.add);
orderRoutes.route('/view/:user/:datetime').get(orderController.viewbyid);
orderRoutes.route('/update/:id').put(orderController.update);
orderRoutes.route('/delete/:id').get(orderController.delete);
module.exports=orderRoutes;