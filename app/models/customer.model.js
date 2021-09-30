
module.exports = mongoose => {
    var schema = mongoose.Schema(
      {
        id: Number,
        username: String,
        password: String,
        first_name: String,
        last_name: String,
        postal_code: String,
        gender: String,
      },
      { timestamps: true }
    );
  
    // schema.method("toJSON", function() {
    //   const { __v, _id, ...object } = this.toObject();
    //   object.id = _id;
    //   return object;
    // });
  
    const Customer = mongoose.model("Customer", custSchema);
    return Customer;
  };