
let Orders = require('../model/order.model');
module.exports.show=(req, res)=>{
    Orders.find(function(err, orders){
        if(err){
            console.log(err);
        }
        else {
            res.json(orders);
        }
    });
}
module.exports.viewbyid=(req,res)=>{
    Orders.find({user:req.params.user,datetime:req.params.datetime},(err,order)=>{
        if (err) {
            res.json(err);
        }
        else {
            res.json(order);
        }
    })
}
module.exports.update=(req,res)=>{
    Orders.findById(req.params.id, function(err, order) {
        if (!order)
            res.status(404).send("data is not found");
        else {
            console.log(order);
            order.status = req.body.status; 
            order.datetime=req.body.datetime;   
            order.save().then(business => {
                res.json('Update complete');
            })
                .catch(err => {
                    res.status(400).send("unable to update the database");
                });
        }
    });
}
module.exports.add = (req, res, err) => {
    const order = new Orders(req.body)
    if (!order) {
        return res.status(400).json({ success: false, error: err })
    }
    order.save().then(() => {
        return res.status(201).json({
            success: true,
            message: 'created!',
        })
    })
        .catch(error => {
            return res.status(400).json({
                error,
                message: 'not created!',
            })
        })
}
module.exports.delete = (req, res) => {
    Orders.findByIdAndDelete({ _id: req.params.id }, (err) => {
        if (err) {
            res.json(err);
        }
        else {
            res.json('removed');
        }
    }
    )
}
