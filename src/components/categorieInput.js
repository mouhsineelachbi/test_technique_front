import React, { Component } from 'react'
import { v4 as uuid } from 'uuid'

export default class CategorieInput extends Component {

    constructor(props){
        super(props);
        this.state = {
            id: uuid(),
            title: '',
        }
    }

    addCategorie = (e)=> {
        e.preventDefault();
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(this.state)
        };
        fetch('http://localhost:3001/categorie', requestOptions)
        .then(response => response.json())
        e.target.categorie_Name.value = '';
        console.log("done");
        this.setState({
            id: uuid(),
        })
    }

    handleChange = (e)=>{
        e.preventDefault();
        this.setState({
            title: e.target.value
        })
    }

    render() {
        return (
            <div className="input-group-prepend ml-3">
                <form onSubmit={this.addCategorie}>
                <div className="input-group">
                        <div className="input-group-prepend">
                            <div className="input-group-text bg-primary text-white">
                                <i className="fa fa-list-alt"></i>
                            </div>
                        </div>
                    <input type="text" name="categorie_Name" className="form-control text-capitalize" onChange={this.handleChange} placeholder="Add categorie name" />
                    <button className="btn btn-block btn-primary mt-3" type="submit">Add Categorie</button>
                </div>
                </form>
            </div>
        )
    }
}
