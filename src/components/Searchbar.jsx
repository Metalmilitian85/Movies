import React from 'react'

const Searchbar = (props) => {
    return (
        <div>
            <input 
                value={props.value} 
                onChange={(event)=> props.setSearchValue(event.target.value)} 
                type="text"
                placeholder="Type to search..."
                className="text-black">
            </input>
        </div>
    )
}

export default Searchbar;