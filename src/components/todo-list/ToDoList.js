import React, {Component} from "react";
import ToDoItem from "../todo-item/ToDoItem"

export default class ToDoList extends Component {

    //brendan's way
    // listenForDelete = (event) => {
    //     if (event.target.id) {
    //         let id = event.target.id
    //         this.props.deleteToDo(id)
    //     }
    // }

    render() {
        const ToDoNode = this.props.todos.map((todo) => {
            return (<ToDoItem passedDownGet={this.props.passedDownGet} todo={todo} key={todo.id} />)
        })
        return (<ul>{ToDoNode}</ul>)
        // return(<ul onClick={this.listenForDelete}>{ToDoNode}</ul>))
    }
}