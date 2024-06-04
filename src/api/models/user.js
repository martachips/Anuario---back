const mongoose = require('mongoose');

const userSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    email: { type: String, required: true },
    password: { type: String, required: true },
    course: { type: String, required: true },
    promotionYear: { type: String },
    avatar: { type: String },
    events: [{ type: mongoose.Types.ObjectId, ref: 'events' }],
    role: { type: String, enum: ['student', 'professor'] }
  },
  {
    timestamps: true,
    collection: 'users'
  }
);

const User = mongoose.model('users', userSchema, 'users');
module.exports = User;
