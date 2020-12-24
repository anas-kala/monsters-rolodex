import React from 'react'
import './search-box.styles.css'

// this is a functional component, whch is unlike class component has no constructor
// and no state, no life-cycle methods. We use it when we want to render some html, and 
// here we use a functional component which takes some props (properties) and returns an html.
export const SearchBox = ({placeholder,handleChange}) => (

    < input
        className='search'
        type='search'
        placeholder={placeholder}
        onChange={handleChange}
    />
);