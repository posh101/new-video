import React from 'react';
import { useState } from 'react';

function SearchBar () {
const [term, setTerm] = useState('')

const onInputChange = (event) => {
    setTerm(event.target.value)
}

const onFormSubmit = event => {
    event.preventDefault()
    onFormSubmit(term)
 }

 return (
    <div className="search-bar ui segment">
        <form 
        className="ui form"
        onSubmit={onFormSubmit} >
            <div className="field">
                <label>Video search</label>
                <input type="text" 
                value={term} 
                onChange={onInputChange} placeholder="Enter search keyword"/>
            </div>
        </form>
    </div>

    )
}




       

export default SearchBar;