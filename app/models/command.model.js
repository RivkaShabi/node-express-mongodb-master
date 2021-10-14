const { stringify } = require("querystring")

module.exports=mongoose=>{
   var schema= mongoose.Schema({
     code:{
        type:Number
     },
     userName:{
         type:String,
         require:true
     },
     dateReport:{
         type:Date
     },
     mark:{
        type:Number,
        min:1,
        max:100
    },
    notes:{
        type:String
    },
    ownerNotes:{
        type:String
    },
    status:{
        type:Boolean
    },
    id_place:{
        type:Number
    }
   },
 { timestamps: true })

   schema.method("toJSON", function() {
    const { __v, _id, ...object } = this.toObject();
    object.id = _id;
    return object;
  });

  const command = mongoose.model("command", schema);
  return command;
};
