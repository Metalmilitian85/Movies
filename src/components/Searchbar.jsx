import React from 'react'

const Searchbar = (props) => {
    return (
        <div>
            <input 
                value={props.value} 
                onChange={(event)=> props.setSearchValue(event.target.value)} 
                placeholder="Type to search...">
            </input>
        </div>
    )
}

export default Searchbar;