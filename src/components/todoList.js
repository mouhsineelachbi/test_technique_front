import React, { Component } from 'react'
import ToDo from './todo';

export default class TodoList extends Component {

    constructor(props){
        super(props)
        this.state = {
            tasks: [],
            id_cat: props.categoryID,
            task: {
                id:'',
                title:'',

            }
        }
    }

/*     storageChanged(e) {
        if(e.key === 'categoryID') {
            this.setState({id_cat: e.newValue})
        }
        console.log(this.state.id_cat)
    }
 */

    componentDidMount() {
        fetch('http://localhost:3001/task/byCategorie/'+this.state.id_cat)
        .then(response => response.json())
        .then(data => this.setState({
            tasks: data
        }));
    }

    componentWillReceiveProps = (nextProps) => {
        if (nextProps !== this.props) {
            this.setState({
                id_cat: nextProps.categoryID
            });
            
            console.log("changed"+this.state.id_cat);
            fetch('http://localhost:3001/task/byCategorie/'+this.state.id_cat)
            .then(response => response.json())
            .then(data => this.setState({
                tasks: [...data]
            }));
        }
    }

    componentDidUpdate(prevProps) {
        if (this.props !== prevProps) {
            fetch('http://localhost:3001/task/byCategorie/'+this.state.id_cat)
            .then(response => response.json())
            .then(data => this.setState({
                tasks: data
            }));
        }
      }

    clearList = () => {
        this.setState({
            tasks: []
        })
    }

    handleChange = (e) => {
        
    }

    handleArchive = (task) => {
        task.archived = 1;
        const requestOptions = {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(task)
        };
        fetch('http://localhost:3001/task', requestOptions)
        .then(response => response.json())
        .then(data=> console.log("archived"))
    }

    handleDone = (task) => {
        task.done = 1;
        const requestOptions = {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(task)
        };
        fetch('http://localhost:3001/task', requestOptions)
        .then(response => response.json())
        .then(data=> console.log("done is done"))
    }

    getOnlyArchived = () => {
        fetch('http://localhost:3001/taskarchived')
        .then(response => response.json())
        .then(data => this.setState({
            tasks: data
        }))
     }
     
     getOnlyDone = () => {
        fetch('http://localhost:3001/taskdone')
        .then(response => response.json())
        .then(data => this.setState({
            tasks: data
        }))
     }
    

    render() {
        const taskList =  this.state.tasks.map(task => {
            return (<ToDo handleArchive={()=>this.handleArchive(task)} handleDone={()=>this.handleDone(task)} done={task.done} archived={task.archived} key={task.id} title={task.title}></ToDo>)});
        return (
            <div className="todoList">
                <ul className="list-group my-5">
                    <h3 className="text-capitalize text-center text-white">Tasks List</h3>
                    {taskList}
                    <div className="btn-group btn-group-lg">
                        {/*<button type="button" className="btn btn-danger btn-block text-uppercase" onClick={this.clearList}>Clear</button>*/}
                        <button type="button" className="btn btn-danger btn-block text-uppercase" onClick={this.getOnlyArchived}>Archived tasks</button>
                        <button type="button" className="btn btn-danger btn-block text-uppercase" onClick={this.getOnlyDone}>Done tasks</button>
                    </div>
                </ul>
            </div>
        )
    }
}
        
