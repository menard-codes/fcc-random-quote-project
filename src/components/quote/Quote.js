import React from 'react'

function Quote(props) {
    return (
        <div>
            <div id="text">
                <p>{props.quote}</p>
            </div>
            <div id="author">
                <p>{props.author}</p>
            </div>
        </div>
    )
}

export default Quote
