const todo = require("../models/todo");

exports.getAllTodos = async(req,res) => {
    try {
        const todos = await todo.find({}).sort({ 'createdAt': -1 });
        return res.status(200).json(todos);
    } catch (error) {
        return res.status(500).json({ error: 'Internal Server Error', message: error.message });
    }
}

exports.addTodo = async(req, res) => {
    try {
        const {data} = req.body;
        const newTodo = await todo.create({
            data, 
            createdAt: Date.now()
        })
        // await newTodo.save();
        return res.status(200).json(newTodo);
    } catch (error) {
        return res.status(500).json({ error: 'Internal Server Error', message: error.message });
    }
}

exports.updateTodo = async(req,res) => {
    try {
        const {id} = req.params;
        const {data} = req.body;
        const updatedTodo = await todo.findByIdAndUpdate(id, data, {new: true})
        return res.status(200).json(updatedTodo);
    } catch (error) {
        return res.status(500).json({ error: 'Internal Server Error', message: error.message });
    }
}

exports.deleteTodo = async(req,res) => {
    try {
        const {id} = req.params;
        const deletedTodo = await todo.findByIdAndDelete(id)
        return res.status(200).json(deletedTodo);
    } catch (error) {
        return res.status(500).json({ error: 'Internal Server Error', message: error.message });
    }
}

exports.toggleDone = async(req,res) => {
    try {
        const {id} = req.params;
        const currTodo = await todo.findById(id);
        const markedDone = await todo.findOneAndUpdate({_id: id}, {done: !currTodo.done})
        await currTodo.save();
        return res.status(200).json(markedDone);
    } catch (error) {
        return res.status(500).json({ error: 'Internal Server Error', message: error.message });
    }
}