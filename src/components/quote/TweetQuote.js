import React from 'react'

function TweetQuote(props) {
    const hashtags = ["quotes"];
    const related = ["freecodecamp"];
    const text = props.quote;
    const author = props.author;
    const twitterIntent = 'https://twitter.com/intent/tweet?'
    const tweetEncode = `${twitterIntent}hashtags=${encodeURIComponent(hashtags.join(','))}&related=${encodeURIComponent(related.join(','))}&text=${encodeURIComponent(text + '  -' + author)}`

    return (
        <div>
            {/* change this later to twitter icon */}
            <a id="tweet-quote" href={tweetEncode} target="_top" title="Tweet this quote">
                <span>
                    <br />
                    <i class="fab fa-twitter fa-2x circle-logo"></i>
                </span>
            </a>
        </div>
    )
}

export default TweetQuote
