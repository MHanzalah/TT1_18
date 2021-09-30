
module.exports = mongoose => {
    var schema = mongoose.Schema(
      {
        id: Number,
        title: String,
        price: Number,
        description: String,
        category_id: Number,
        image: String,
        qty: Number
      },
      { timestamps: true }
    );
  
    schema.method("toJSON", function() {
      const { __v, _id, ...object } = this.toObject();
      object.id = _id;
      return object;
    });
  
    const Item = mongoose.model("Item", schema);
    return Item;
  };