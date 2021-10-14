module.exports = app => {
    const user = require("../controllers/user.controller.js");

    var router = require("express").Router();

    // Create a list users
    router.post("/", user.createUsersList);

    //? Retrieve all places 
    router.get("/", user.findAllplaces);

    //? Retrieve all owner's places 
    router.get("/id/:id", user.findAllOwnerPlaces);

    //?getUserById
    //router.get("/:id", user.getUserById);

    app.use("/api/user", router);
};