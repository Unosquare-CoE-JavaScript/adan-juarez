import React from 'react'
import './search.styles.scss'

const Search = ({
    className,
    onBlur,
    onChange,
    placeholder,
    type
}) => {
  return (
    <div className='search-container'>
        <input 
            type={type}
            onChange={onChange}
            onBlur={onBlur}
            placeholder={placeholder}
            className={`search-style ${className}`}
        />
    </div>
  )
}

export default Search