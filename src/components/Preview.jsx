import React from 'react';

const Preview = ({children}) => {
	return (
		<div className="preview" id="preview" dangerouslySetInnerHTML={children}/>
	);
};

export default Preview;