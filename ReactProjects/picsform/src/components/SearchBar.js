import React from 'react';

class SearchBar extends React.Component {

	state = { term: ''};

	/*Prevents page from refreshing on submit*/
	/*Assigning an arrow function will prevent an error for undefined state*/
	onFormSubmit = (event) =>  {
		event.preventDefault();

		/*Term is set by onChange*/
		this.props.onSubmit(this.state.term);
	}

	render() {
		return  ( 
			<div className="ui segment"> 
				<form onSubmit={this.onFormSubmit} className="ui form">
				 <div className="field">
				 	<label htmlFor="SearchBarInput">Image Search</label>
				 	<input id="SearchBarInput" 
				 	type="text" 
				 	className="form-control" 
				 	value = {this.state.term} 
				 	onChange={(e) => this.setState({ term: e.target.value }) }
				 	placeholder="Search Bar"/>

				 </div>
				</form>
			</div>
			);
	};
};

export default SearchBar;