const { stringify } = require("querystring")

module.exports=mongoose=>{
   var schema= mongoose.Schema({
     userName:{
         type:String,
         require:true
     },
     user_id:{
         type:String
     },
     permission:{
        type:String,
        enum:["owner","user","manager"]
    }
   },
 { timestamps: true })

   schema.method("toJSON", function() {
    const { __v, _id, ...object } = this.toObject();
    object.id = _id;
    return object;
  });

  const command = mongoose.model("user", schema);
  return command;
};
