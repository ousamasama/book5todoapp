import React, {Component} from "react";

export default class ToDoForm extends Component {

    handleFieldChange = (event) => {
        this.props.setToDoItemState(event.target.value)
    }

    render() {
        return(
            <div>
                <input type="text" placeholder="new todo item" onChange={this.handleFieldChange} />
                <button onClick={() => {
                    console.log("War Eagle")
                    this.props.addToDo()
                }}>
                Click Me If You Love Auburn
                </button>
            </div>
        )
    }
}