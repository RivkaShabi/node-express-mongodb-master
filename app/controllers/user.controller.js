const db = require("../models");
const Place = db.places;
const User = db.users;

// Create a list users
exports.createUsersList = (req, res) => {
    console.log("dd");
    const user = [new User({
            userName: "moshe",
            user_id: "123456789",
            permission: "owner"

        }),
        new User({
            userName: "yair",
            user_id: "123456798",
            permission: "owner"
        }), new User({
            userName: "menachem",
            user_id: "1234444789",
            permission: "owner"
        }), new User({
            userName: "gad",
            user_id: "234567890",
            permission: "user"
        }), new User({
            userName: "meni",
            user_id: "234321345",
            permission: "user"
        }), new User({
            userName: "beni",
            user_id: "345676789",
            permission: "user"
        }), new User({
            userName: "yosi",
            user_id: "567890876",
            permission: "manager"
        }),
    ];

    for (var x in user) {
        new User(user[x])
            .save()
            .catch((err) => {
                res.status(500).send({
                    message: err.message || "Some error occurred while creating the usere."
                });
            });
    }
    const places = [new Place({
        name: "alpim",
        owner: 123456789,
        code: 1,
        area: "north",
        kind: "climb",
        price: 50,
        actions: ["clim", "jump"]
    }), new Place({
        name: "goodies",
        owner: 123456789,
        code: 2,
        area: "sourth",
        kind: "baking",
        price: 45,
        actions: ["bake", "cook"]
    }), new Place({
        name: "fly",
        owner: 123456798,
        code: 3,
        area: "center",
        kind: "climb",
        price: 40,
        actions: ["fly", "jump"]
    }), new Place({
        name: "doIt",
        owner: 1234444789,
        code: 4,
        area: "center",
        kind: "swim",
        price: 30,
        actions: ["compare", "energy"]
    })]
    for (var x in places) {
        new Place(places[x])
            .save()
            .catch((err) => {
                res.status(500).send({
                    message: err.message || "Some error occurred while creating the places."
                });
            });
    }

}

// Retrieve all places 
exports.findAllplaces = (req, res) => {
    console.log("dhdjfhu");
    Place.find({})
        .then(data => {

            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message: err.message || "Some error occurred while retrieving places."
            });
        });
};
// Retrieve all owner's placess from the database.
exports.findAllOwnerPlaces = (req, res) => {
    const owner_id = req.params.id;
    console.log(req.params.id)
    Place.find({ owner: owner_id })
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message: err.message || "Some error occurred while retrieving places."
            });
        });
};
//getUserById
exports.getUserById = (req, res) => {
    const userId = req.params.id;
    User.find({ user_id: userId })
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message: err.message || "there isnot such user."
            });
        });
};