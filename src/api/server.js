const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const PORT = 4000;
const cors = require('cors');
const mongoose = require('mongoose');
const config = require('./DB.js');
const sneakersRoute = require('./routes/item.route');
const cartsRoute=require('./routes/cart.route');
const userRoute=require('./routes/user.route');
const orderRoute=require('./routes/order.route');
const expressValidator=require('express-validator');
const session=require('express-session');
mongoose.Promise = global.Promise;
mongoose.connect(config.DB, { useNewUrlParser: true,useUnifiedTopology: true  }).then(
  () => {console.log('Database is connected') },
  err => { console.log('Can not connect to the database'+ err)}
);
app.use(cors());
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use(session({
  secret: 'keyboard cat',
  resave: true,
  saveUninitialized: true,
 // cookie: { secure: true }
}));
app.use(require('connect-flash')());
app.use(function (req, res, next) {
 res.locals.messages = require('express-messages')(req, res);
  next();
});
app.use(expressValidator({
  errorFormatter: function(param, msg, value) {
      var namespace = param.split('.')
      , root    = namespace.shift()
      , formParam = root;

    while(namespace.length) {
      formParam += '[' + namespace.shift() + ']';
    }
    return {
      param : formParam,
      msg   : msg,
      value : value
    }
  }
  }));
app.use('/sneakers',sneakersRoute);
app.use('/addcart',cartsRoute);
app.use('/user',userRoute);
app.use('/order',orderRoute);
app.listen(PORT, function(){
  console.log('Server is running on Port:',PORT);
});