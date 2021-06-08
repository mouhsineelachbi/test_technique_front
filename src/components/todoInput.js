import React, { Component } from 'react'
//import CategorieList from './categorieList';
import { v4 as uuid } from 'uuid'


export default class TodoInput extends Component {

    constructor(props){
        super(props)
        this.state = {
            title: '',
            id: uuid(),
            done:0,
            archived:0,
            id_cat: this.props.categoryID
        }
    }

    handleChange = (e) => {
        this.setState({
            title: e.target.value
        })
    }

    handleSubmit = (e) => {
        //e.preventDefault();
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(this.state)
        };
        fetch('http://localhost:3001/task', requestOptions)
        .then(response => response.json())
        e.target.task_name.value = '';
        console.log("done");
        this.setState({
            id: uuid(),
        })

        console.log(this.state);
    }

    componentDidUpdate(prevProps) {
        if (this.props !== prevProps) {
            this.setState({
                id_cat: this.props.categoryID,
            })
        }            
      }

    render() {
        
        //const show = false
        return (
            <div className="card card-body my-3">
                {/*show && <CategorieList onChange="onChangeCat"></CategorieList>*/}
                <form onSubmit={this.handleSubmit}>
                    <div className="input-group">
                        <div className="input-group-prepend">
                            <div className="input-group-text bg-primary text-white">
                                <i className="fa fa-book"></i>
                            </div>
                        </div>
                            <input type="text"
                                className="form-control text-capitalize"
                                name="task_name"
                                placeholder="Enter a task"
                                //value={task}
                                onChange={this.handleChange}
                                />
                    </div>
                    <div className="row col-sm-6 mx-auto">
                        <button type="submit" className="btn btn-block btn-primary mt-3">Submit</button>
                    </div>
                </form>
            </div>
        )
    }
}
