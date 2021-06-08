import React, { Component } from 'react'

export default class ToDo extends Component {

    handleEdit = (id) => {
        console.log("you've the right to edit the task")
    }

    handleDone = () => {

    }

    handeDelete = () => {
        console.log()
    }


    render() {
        const title = this.props.title;
        //const id = this.props.id;
        const archived = this.props.archived;
        const done = this.props.done;
        const handleArchive = this.props.handleArchive;
        const handleDone = this.props.handleDone;
        return (
            <li className="list-group-item text-capitalize d-flex justify-content-between my-2">
                <h6>{title}</h6>
                <div className="todo-icon">
                    <span className="mx-2 text-success" onClick={this.handleEdit}><i className="fa fa-pen"></i></span>
                    {!done && <span className="mx-2 text-primary" onClick={handleDone}><i className="fa fa-check"></i></span>}
                    {!archived && <span className="mx-2 text-danger" onClick={handleArchive}><i className="fa fa-trash"></i></span>}
                </div>                          
            </li>
        )
    }
}
