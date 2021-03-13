const express = require('express');
const validateBody = require('./middleware/validate.mv');
const taskController = require('./controller/task.controller'); 
const mainController = require('./controller/main.controller');

const app = express();

const bodyParser = express.json();

app.get('/tasks', taskController.getTasks);
app.get('/task/:id', taskController.getTask);
app.get('/brewmecoffee', mainController.mostImportantQuery)

app.post('/createtask', bodyParser, validateBody, taskController.createTask);
app.put('/updatetask/:id', bodyParser, validateBody, taskController.updateTask);
app.delete('/deletetask/:id', taskController.deleteTask);

module.exports = app;