let Cart = require('../model/cart.model');
module.exports.show = (req, res) => {
    Cart.find((err, cart) => {
        if (err) {
            console.log(err);
        }
        else {
            res.json(cart);
        }
    });
};
module.exports.add = (req, res, err) => {
    const cart = new Cart(req.body)
    if (!cart) {
        return res.status(400).json({ success: false, error: err })
    }
    cart.save().then(() => {
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
module.exports.view = (req, res) => {
    let id = req.params.id;
    Cart.findById(id, (err, cart) => {
        if (err) {
            console.log(err);
        }
        else {
            res.json(cart);
        }
    })
}
module.exports.delete = (req, res) => {
    Cart.findByIdAndDelete({ _id: req.params.id }, (err, cart) => {
        if (err) {
            res.json(err);
        }
        else {
            res.json('removed');
        }
    }
    )
}
module.exports.update=(req,res)=>{
    Cart.findById(req.params.id, function(err, cart) {
        if (!cart)
            res.status(404).send("data is not found");
        else {
            console.log(cart);
            cart.quantity = req.body.quantity;    
            cart.save().then(business => {
                res.json('Update complete');
            })
                .catch(err => {
                    res.status(400).send("unable to update the database");
                });
        }
    });
}
module.exports.cartbyuser=(req,res)=>{
    Cart.find({user:req.params.user},(err,cart)=>{
        if (err) {
            res.json(err);
        }
        else {
            res.json(cart);
        }
    })
}