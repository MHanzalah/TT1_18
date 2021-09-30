//const { item } = require("../models/index.js");

module.exports = (app) => {
    const item = require("../controllers/item.controller.js");

    //var router = require("express").Router();

    // Create a new item
    app.post("/", item.create);

    // Retrieve all items
    app.get("/", item.findAll);

    // Retrieve a single item with id
    app.get("/:id", item.findOne);

    // Update an item with id
    app.put("/:id", item.update);

    // Delete an item with id
    app.delete("/:id", item.delete);

    // delete all items
    app.delete("/", item.deleteAll);

    //app.use("/api/item", router);
    };