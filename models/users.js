const mongoose = require('mongoose');

const Schema = mongoose.Schema;
const storeSchema = new Schema ({
   name: {
    type: String,
    require: true
   }

   email {
    type: String,
    require: true, 
    unique: true
   }   
})

const User = mongoose.model('User, storeSchema')
module.exports = {User}; 