const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  username: {
    required: true,
    type: String,
    minlength: 3
  },
  email: {
    required: true,
    type: String
  },
  passwordHash: {
    required: true,
    type: String
  },
  phoneNumber: {
    required: true,
    type: String
  },
  notes: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Note'
    }
  ]
})

userSchema.set('toJSON', {
  transform: (document, returnedNote) => {
    delete returnedNote._id
    delete returnedNote.__v
  }
})


module.exports = mongoose.model('User', userSchema);