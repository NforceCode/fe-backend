const {Task} =require('../model');

module.exports.createTask = async (req, res, next) =>{
  try {
    const {body: taskBody} = req;

    const newTask = await Task.createTask(taskBody);

    res.status(201).send(newTask);
  } catch(error) {
    res.status(400).send(error.message);
  }
}

module.exports.getTasks = async (req,res,next) => {
  try {
    const tasks = await Task.getTasks();

    res.status(200).send(tasks);
  } catch (error) {
    res.status(404).send(error.message);
  }
}
module.exports.getTask = async (req,res,next) => {
  try {
    const {params} = req;

    const task = await Task.getTask(params.id);

    res.status(200).send(task);
  } catch (error) {
    res.status(404).send(error.message);
  }
}

module.exports.updateTask = async (req,res,next) =>{
  try {
    const {body: updateData, params} =req;
    const updatedTask = await Task.update(params.id, updateData);

    res.status(200).send(updatedTask);

  } catch (error) {
    res.status(400).send(error.message);
  }
}

module.exports.deleteTask = async (req,res,next) => {
  try {
    const {params} = req;

    await Task.delete(params.id);

    res.status(200).send(`Task with id ${params.id} deleted successfully`);

  } catch (error) {
    res.status(404).send(error.message)
  }
}