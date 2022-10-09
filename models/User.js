const mongoose = require("mongoose");

const UserShema = new mongoose.Schema(
    {
        username:{type:String, require: true, unique:true },
        email:{type:String, require: true, unique:true },
        password: {type:String, require: true},
        isAdmin: {
            type: Boolean,
            default: false,
        },
        },{timestamps:true},
        {
            writeConcern: {
               w: 'majority',
               j: true,
               wtimeout: 1000
            }}
);

module.exports = mongoose.model("User", UserShema)