const Task = require('../models/task');

const createTask = async (taskData) => {
  return await Task.create(taskData);
};

const getAllTasks = async () => {
  return await Task.find();
};

const getTaskById = async (id) => {
  return await Task.findById(id);
};

const updateTask = async (id, taskData) => {
  return await Task.findByIdAndUpdate(id, taskData, { new: true });
};

const deleteTask = async (id) => {
  return await Task.findByIdAndDelete(id);
};

module.exports = {
  createTask,
  getAllTasks,
  getTaskById,
  updateTask,
  deleteTask,
};
