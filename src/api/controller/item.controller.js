let Sneaker = require('../model/item.model');
module.exports.show = (req, res) => {
    Sneaker.find((err, sneakers) => {
        if (err) {
            console.log(err);
        }
        else {
            res.json(sneakers);
        }
    });
};
module.exports.delete = (req, res) => {
    Sneaker.findByIdAndDelete({ _id: req.params.id }, (err, cart) => {
        if (err) {
            res.json(err);
        }
        else {
            res.json('removed');
        }
    }
    )
}
module.exports.view = (req, res) => {
    let id = req.params.id;
    Sneaker.findById(id, (err, sneaker) => {
        if (err) {
            console.log(err);
        }
        else {
            res.json(sneaker);
        }
    })
}
module.exports.update = (req, res) => {
    Sneaker.findById(req.params.id, function (err, sneaker) {
        if (!sneaker)
            res.status(404).send("data is not found");
        else {
            console.log(sneaker);
            sneaker.name = req.body.name;
            sneaker.price = req.body.price;
            sneaker.brand = req.body.brand;
            sneaker.quantity = req.body.quantity;
            sneaker.code = req.body.code;
            sneaker.material = req.body.material;
            sneaker.color = req.body.color;
            sneaker.discount = req.body.discount;
            sneaker.save().then(business => {
                res.json('Update complete');
            })
                .catch(err => {
                    res.status(400).send("unable to update the database");
                });
        }
    });
};
module.exports.quantity = (req, res) => {
    Sneaker.findById(req.params.id, function (err, sneaker) {
        if (!sneaker)
            res.status(404).send("data is not found");
        else {
            console.log(sneaker);
            sneaker.id=req.body.id;
            sneaker.quantity = req.body.quantity;
            sneaker.save().then(business => {
                res.json('Update complete');
            })
                .catch(err => {
                    res.status(400).send("unable to update the database");
                });
        }
    });
};
module.exports.add = (req, res, err) => {
    const sneaker = new Sneaker(req.body)
    if (!sneaker) {
        return res.status(400).json({ success: false, error: err })
    }
    sneaker.save().then(() => {
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