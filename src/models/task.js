const mongoose = require('mongoose');

const taskSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String },
  creationDate: { type: Date, default: Date.now },
  completionDate: { type: Date },
  type: { type: String },
  status: { type: String, enum: ['pending', 'in progress', 'completed'], default: 'pending' },
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  categoryId: { type: mongoose.Schema.Types.ObjectId, ref: 'Category' },
});

const Task = mongoose.model('Task', taskSchema);

module.exports = Task;
