module.exports = mongoose => {

  var schema = mongoose.Schema(
    {
      name:{
        type:String
      },
      owner:{
        type:String
      },
      code:{
        type:Number
      },
      area:{
        type: String
         ,require:true},

      kind: {type:String
       },

      price:{
        type: Number,
        default: 0,
      } ,
      actions:{
        type:[String],
          default: []
      }

    },
    { timestamps: true }
  );

  schema.method("toJSON", function() {
    const { __v, _id, ...object } = this.toObject();
    object.id = _id;
    return object;
  });

  const Place = mongoose.model("place", schema);
  return Place;
};
