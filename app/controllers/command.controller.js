//const { commands } = require("../models");
const db = require("../models");
const Command = db.commands;

// Create and Save a new command
exports.create = (req, res) => {
    // Validate request
    if (!req.body.notes) {
        res.status(400).send({ message: "Content can not be empty!" });
        return;
    }


    // Create a command
    var max = Command.find().sort({ code: -1 }).limit(1)
    const command = new Command({

        userName: sessionStorage.getItem('curUser').userName,
        code: max.code + 1,
        dateReport: Date(),
        mark: req.body.mark,
        notes: req.body.notes,
        ownerNotes: "",
        status: false,
        id_place: req.params.id,
    });

    // Save command in the database
    Command
        .save(command)
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message: err.message || "Some error occurred while creating the command."
            });
        });
};

// Retrieve all place's commands from the database.
exports.findAllcommands = (req, res) => {
    const place_id = req.params.id;
    Command.find({ code: place_id })
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message: err.message || "Some error occurred while retrieving commands."
            });
        });
};

// addOwnerNote by command's id
exports.addOwnerNote = (req, res) => {
    const id = req.params.id;
    //לבדוק הרשאה
    Command.findByIdAndUpdate(id, { ownerNotes: req.body }, { useFindAndModify: false })
        .then(data => {
            if (!data)
                res.status(404).send({ message: "Not found place with id " + id });
            else res.send(data);
        })
        .catch(err => {
            res
                .status(500)
                .send({ message: "Error retrieving place with id=" + id });
        });
};




// Update a Command status to aplly by id
exports.updateStatus = (req, res) => {
    const id = req.params.id;
    //לבדוק הרשאה
    Command.findByIdAndUpdate(id, { status: true }, { useFindAndModify: false })
        .then(data => {
            if (!data)
                res.status(404).send({ message: "Not found command with id " + id });
            else res.send(data);
        })
        .catch(err => {
            res
                .status(500)
                .send({ message: "Error retrieving command with id=" + id });
        });
};