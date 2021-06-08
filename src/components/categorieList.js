import React, { Component } from 'react'
//import Categorie from './categorie'
import CategorieInput from './categorieInput'
//import Select from 'react-select'

export default class CategorieList extends Component {

    constructor(props){
        super(props)
        this.state = {
            categories: [],
            uid:''
        }
    }

    onTrigger = (event) => {
        this.props.parentCallback(event.target.value);
        //event.preventDefault();
        this.setState({
            uid: event.target.value
        })
    }

    componentDidMount(){
        /*const requestOptions = {
            method: 'GET',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(this.state)
        };*/
        fetch('http://localhost:3001/categorie')
        .then(response => response.json())
        .then(data => this.setState({
            categories: data
        }));
    }

    handleChange = (e) => {
        console.log(e.target.value)
    }


    render() {
        const categories = this.state.categories;
        //const cats = categories.map(cat => <Categorie key={cat.id} name={cat.title}></Categorie>)
        const cats = categories.map(cat => <option key={cat.id} value={cat.id} >{cat.title}</option>)
        //const options = 
        return (
            <div className="mb-4">
                <div className="btn-group input-group">
                    {/*<button type="button" className="btn btn-primary text-white dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true">
                            {cats[0]}
                    </button>
                    
                    <div className="dropdown-menu">
                        {cats}
                    </div>
        */} 
                    <select onChange={this.onTrigger} className="form-select text-white btn btn-primary text-center" aria-label="Default select example">
                        <option value='0'>Select a categorie</option>
                        {cats}
                    </select>

                    <CategorieInput />

                </div>
            </div>
        )
    }
}
