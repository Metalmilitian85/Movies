import React from 'react'

const Heading = (props) => {
    return (
        <div>
            <h1 className="text-2xl">{props.heading}</h1>
        </div>
    )
}

export default Heading;