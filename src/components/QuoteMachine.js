import React, { Component } from 'react';
import Quote from './quote/Quote';
import NewQuote from './quote/NewQuote';
import TweetQuote from './quote/TweetQuote';
import './quote_box.css';


class QuoteMachine extends Component {
	constructor(props) {
		super(props);
	
		this.state = {
			quote: '',
			author: ''
		};

		this.newQuote = this.newQuote.bind(this);
	}

	newQuote() {
		const API_URI = 'https://goquotes-api.herokuapp.com/api/v1/random?count=1';
		fetch(API_URI)
			.then(response => response.json())
			.then(data => {
				const main_quote = data.quotes[0];
				this.setState({
					quote: main_quote.text,
					author: main_quote.author
				});
			});
	}

	componentDidMount() {
		this.newQuote();
	}
	
    render() {
        return (
			<div id="app-body">
				<div className='box space' />
				<h1>Random Quotes</h1>
				<div id="quote-box" className="box">
					<Quote quote={this.state.quote} author={this.state.author} />
					<NewQuote fetchNewQuote={this.newQuote} />
					<TweetQuote quote={this.state.quote} author={this.state.author} />
				</div>
				<div className='box space' />
			</div>
        );
    }
}

export default QuoteMachine;




/*

id="quote-box" // wrapper
	id="text" // element
	id="author" // element
	id="new-quote" // clickable-element
	id="tweet-quote" // clickable a tag

Scenario:
	First Load:
		-quote machine displays random quote targeting id="text"
		-with quote author targeting id="author"
	#new-quote was clicked:
		-quote machine should fetch a new quote with it's author
	Click of tweet quote:
		-should be able to tweet the quote with twitter.com/intent/tweet

Condition:
	-#quote-box must be centered

*/
