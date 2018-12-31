import axios from 'axios';

export default axios.create({
	baseURL: 'https://api.unsplash.com/search/photos',
	headers: {
		Authorization: 'Client-ID eb4aa4cc9fd9cbde0e04a8561ab37ca83155ecb26304e9d4a53d8515140c554b'
	}
});