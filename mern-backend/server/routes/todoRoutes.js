const express = require('express');
const router = express.Router();

// Import all controller functions
const { getTodos, addTodo, deleteTodo, getTodoById } = require('../controllers/todoController');

// Get all todos
router.get('/', getTodos);

// Get a single todo by ID
router.get('/:id', getTodoById);

// Add a new todo
router.post('/', addTodo);

// Delete a todo by ID
router.delete('/:id', deleteTodo);

module.exports = router;
