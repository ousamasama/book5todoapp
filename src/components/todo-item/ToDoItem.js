import React, { Component } from "react"

export default class ToDoItem extends Component {
    removeToDo() {
        fetch(`http://localhost:5002/todos/${this.props.todo.id}`, {
            method: "DELETE",
        })
        .then(() => this.props.passedDownGet())
    }

    render() {
        return (<li>
            {this.props.todo.text}
            <button onClick={() => {
                this.removeToDo()
            }}>
                Delete Me If You're A Bama Fan
        </button></li>)
    }
}