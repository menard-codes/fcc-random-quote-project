import React from 'react'

function NewQuote(props) {
    return (
        <div>
            <button id="new-quote" onClick={props.fetchNewQuote}>New Quote</button>
        </div>
    )
}

export default NewQuote
