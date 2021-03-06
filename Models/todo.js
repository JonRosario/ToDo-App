const mongoose = require('mongoose')
const Schema = mongoose.Schema

const todoSchema = new Schema({
  title: String,
  done: {
    type: Boolean,
    default: false
  }
})

module.exports = {
  todo: mongoose.model('Todo', todoSchema),
  todoSchema: todoSchema
}