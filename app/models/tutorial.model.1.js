module.exports = mongoose => {
  var schema = mongoose.Schema(
    {
      title:{
        type: String,
        index:true},

      description: {type:String,
        require:true},

      published:{
        type:Boolean,
        default: false,
      } ,
      catgorya:{
        type:String,
        enum:["children","metch"]
      }

    },
    { timestamps: true }
  );

  schema.method("toJSON", function() {
    const { __v, _id, ...object } = this.toObject();
    object.id = _id;
    return object;
  });

  const Tutorial = mongoose.model("tutorial", schema);
  return Tutorial;
};
