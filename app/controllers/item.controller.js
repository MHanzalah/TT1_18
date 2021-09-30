const db = require("../models");
const Item = db.item;

// Create and Save a new item
exports.create = (req, res) => {
  // Validate request
  if (!req.body.title) {
    res.status(400).send({ message: "Content can not be empty!" });
    return;
  }


  // Create an item
  const item = new Item({
    id: req.body.Number,
    title: req.body.title,
    price: req.body.Number,
    description: req.body.String,
    category_id: req.body.Number,
    image: req.body.String,
    qty: req.body.Number
  });

  // Save Item in the database
  item
    .save(item)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the Appl."
      });
    });
};

// Retrieve all items from the database.
exports.findAll = (req, res) => {
    // const title = req.query.title;
    // var condition = title ? { title: { $regex: new RegExp(title), $options: "i" } } : {};
  
    Item.find()
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while retrieving items."
        });
      });
};

// Find a single item with an id
exports.findOne = (req, res) => {
    const id = req.params.id;

    Item.findById(id)
      .then(data => {
        if (!data)
          res.status(404).send({ message: "Item not found with id " + id });
        else res.send(data);
      })
      .catch(err => {
        res
          .status(500)
          .send({ message: "Error retrieving item with id=" + id });
      });
};

// Update a item by the id in the request
exports.update = (req, res) => {
    if (!req.body) {
        return res.status(400).send({
          message: "Data to update can not be empty!"
        });
      }
    
      const id = req.params.id;
    
      Item.findByIdAndUpdate(id, req.body, { useFindAndModify: false })
        .then(data => {
          if (!data) {
            res.status(404).send({
              message: `Cannot update item with id=${id}. Maybe item was not found!`
            });
          } else res.send({ message: "Item was updated successfully." });
        })
        .catch(err => {
          res.status(500).send({
            message: "Error updating Item with id=" + id
          });
        });
};

// Delete a item with the specified id in the request
exports.delete = (req, res) => {
    const id = req.params.id;

    Item.findByIdAndRemove(id)
      .then(data => {
        if (!data) {
          res.status(404).send({
            message: `Cannot delete Tutorial with id=${id}. Maybe Tutorial was not found!`
          });
        } else {
          res.send({
            message: "Tutorial was deleted successfully!"
          });
        }
      })
      .catch(err => {
        res.status(500).send({
          message: "Could not delete Tutorial with id=" + id
        });
      });

};


// Delete all items from the database.
exports.deleteAll = (req, res) => {
    Item.deleteMany({})
    .then(data => {
      res.send({
        message: `${data.deletedCount} Items were deleted successfully!`
      });
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while removing all items."
      });
    });  
}
