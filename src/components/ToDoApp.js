import React, { Component } from 'react';
import './ToDoApp.css';
import Title from "./title/Title"
import ToDoForm from "./todo-form/ToDoForm"
import ToDoList from "./todo-list/ToDoList"

class ToDoApp extends Component {

  state = {
    data: [],
    ToDoItem: ""
  }

  setToDoItemState = (value) => {
    this.setState({ ToDoItem: value })
  }

  getToDos() {
    fetch("http://localhost:5002/todos")
      .then((data) => data.json())
      .then(todos => this.setState({ data: todos }))
  }

  passedDownGet = () => {
    fetch("http://localhost:5002/todos")
      .then((data) => data.json())
      .then(todos => this.setState({ data: todos }))
  }

  addToDo = () => {
    const newToDo = { text: this.state.ToDoItem }
    fetch("http://localhost:5002/todos", {
      method: "POST",
      headers: {
        "Content-Type": "application/json; charset=utf-8"
      },
      body: JSON.stringify(newToDo)
    })
      .then(() => this.getToDos())
  }

  // brendan's way, pass deleteToDo={this.deleteToDo} to list
  // deleteToDo = (id) => {
  //   fetch(`http://localhost:5002/todos/${this.props.todo.id}`, {
  //     method: "DELETE",
  //   })
  //     .then(() => this.getToDos())
  // }

  componentDidMount() {
    this.getToDos()
  }

  render() {
    return (
      <div className="ToDoApp">
        <Title />
        <ToDoForm addToDo={this.addToDo} setToDoItemState={this.setToDoItemState} />
        <ToDoList passedDownGet={this.passedDownGet} removeToDo={this.removeToDo} todos={this.state.data} />
        {/* {this.getToDos()} */}
        {/* ^ fetches infinitely ^ */}
      </div>
    );
  }
}

export default ToDoApp;
