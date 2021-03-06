import React from 'react';
import './ImageLinkForm.css';

const ImageLinkForm = ({ onInputChange, onSubmit }) => {
	return (
		<div>
			<p className='f3'>
				{'Insert an image and it will detect the face'}
			</p>
			<div className='center'>
				<div className='center shadow-5 br3 w-60'>
					<input className='w-70 f4 pa2' type='tex' onChange={onInputChange}/>
					<button className='grow link w-20 pa2 white bg-blue' onClick={onSubmit} >Detect</button>
				</div>
			</div>
		</div>
	);
}

export default ImageLinkForm;