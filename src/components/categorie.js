import React, { Component } from 'react'
import Select from 'react-select'

export default class Categorie extends Component {
    render() {
        const name = this.props.name;
        const key = this.props.key;
        return (
            <div>
                {/*<span className="dropdown-item">{name}</span>*/}
                <option value={key}>{name}</option>
                
            </div>
        )
    }
}
