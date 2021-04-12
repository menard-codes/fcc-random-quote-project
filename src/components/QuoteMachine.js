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
		const API_URI = 'https://gist.githubusercontent.com/camperbot/5a022b72e96c4c9585c32bf6a75f62d9/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json';
		fetch(API_URI)
			.then(response => response.json())
			.then(data => {
				const randomIndex = Math.floor(Math.random() * 102);
				const main_quote = data.quotes[randomIndex];
				this.quoteList = data.quotes;
				this.setState({
					quote: main_quote.quote,
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

