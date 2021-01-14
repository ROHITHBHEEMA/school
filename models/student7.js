const mongoose = require('mongoose');
// mongoose.set('useNewUrlParser', true);
// mongoose.set('useUnifiedTopology', true);
const Schema = mongoose.Schema;

const studentSchema = new Schema ({
    name:{
        type:String,
        required:true
    },
    phone:{
        type:Number,
        required:true
    },
    adnum:{
        type:Number,
        required:true
    },
    class:{
        type:Number,
        required:true
    },
    medium: {
        type:String,
        required:true
    },


});

module.exports = mongoose.model('Student7', studentSchema)