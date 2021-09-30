
module.exports = mongoose => {
  var schema = mongoose.Schema(
    {
      id: Number,
      name: String,
      description: String,
      image: String,
    },
    { timestamps: true }
  );

  // schema.method("toJSON", function() {
  //   const { __v, _id, ...object } = this.toObject();
  //   object.id = _id;
  //   return object;
  // });

  const Category = mongoose.model("Category", catSchema);
  return Category;
};