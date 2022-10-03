const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const gymSchema = new Schema ({
     name:      { type: String, required: [true, 'Gym Name is Required']},
     contact:   { type: Number, required: false},
     city:      { type: String, required: [true, 'Gym City is Required']}
})


const gym = mongoose.model('gym', gymSchema);
module.exports= gym;