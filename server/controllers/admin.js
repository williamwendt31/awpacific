const adminModel = require('../models/admin');
const productsModel = require('../models/products');
const shoppingCartModel = require('../models/shopping-cart');

module.exports = {
    login: (req, res) => {
        let userInput = req.body;

        if (userInput.type == 'admin') {
            userInput.type = 1;
        } else {
            userInput.type = 0;
        }

        adminModel.checkLogin(userInput, (err, result) => {
            if (err) {
                console.log(err);
                res.json(err);
            } else {
                console.log(result);
                res.json(result);
            }
        });
    },
    newUser: (req, res) => {
        let userInput = req.body;

        if (userInput.type == 'admin') {
            userInput.type = 1;
        } else {
            userInput.type = 0;
        }

        adminModel.createUser(userInput, (err, result) => {
            if (err) {
                console.log(err);
                res.json(err);
            } else {
                console.log(result);
                res.json(result);
            }
        });
    }
}