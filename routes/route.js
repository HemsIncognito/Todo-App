const express = require('express');

const { addTodo, getAllTodos, toggleDone, updateTodo, deleteTodo } = require ('../controllers/todo-controller.js');

const router = express.Router();


router.post('/todos', addTodo)
router.get('/todos', getAllTodos);
router.put('/todos/:id', toggleDone);
router.put('/todos/:id', updateTodo);
router.delete('/todos/:id', deleteTodo);


module.exports = router;