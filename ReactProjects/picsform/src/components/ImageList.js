import './ImageList.css';
import React from 'react';

const ImageList = props => {

	const images = props.images.map(({description, id, urls}) => {  
		return <a target="_blank" href={urls.regular}> <img alt={description} key={id} src={urls.regular} /> </a>
	});

	return <div className="image-list"> {images} </div>;
};

export default ImageList;