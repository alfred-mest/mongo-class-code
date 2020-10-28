const mongoose = require('mongoose');


//do not forget the 'new' keyword
const noteSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  content: {
    type: String,
    required: true,
    minlength: 20,
    maxlength: 80
  }
})



noteSchema.set('toJSON', {
  transform: (document, returnedNote) => {
    delete returnedNote._id
    delete returnedNote.__v
  }
})



module.exports = mongoose.model('Note', noteSchema);