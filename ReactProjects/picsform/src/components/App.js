import React from 'react';
import unsplash from '../api/unsplash';
import SearchBar from './SearchBar';
import ImageList from './ImageList';


class App extends React.Component {
	
/*General Synopsis:

 When a form is submitted then 'this.onFormSubmit' is called.
 it takes the event and prevents the default behavior. The property
 onSubmit calls 'onSearchSubmit' which logs the term from
 'this.props.onSubmit(this.state.term)';
*/

state = { images: [] };

	 onSearchSubmit = async term => {
		const response = await unsplash.get('https://api.unsplash.com/search/photos', {
			params: { query: term },
			
		});

		this.setState ({images: response.data.results});
	}
	/*onSubmit is passed to the SearchBar.js using props (property) 
	  onSubmit
	*/
	render(){
		return (
			<div className="ui container" style={{ marginTop: '10px'}}>
				<SearchBar onSubmit={this.onSearchSubmit} />
				Found: {this.state.images.length} images
				<ImageList images = {this.state.images} />
			</div>
		);
	}
};

export default App;
