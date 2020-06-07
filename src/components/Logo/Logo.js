import React from 'react';
import Tilt from 'react-tilt';
import logo from './logo.png';
const Logo = () => {
	return (
		<div className='ma4 mt4'>
			<Tilt className="Tilt" options={{ max : 35 }} style={{ height: 250, width: 250 }} >
				<div className="Tilt-inner"> 
					<img alt = 'logo' src={logo} /> 
				</div>
			</Tilt>
		</div>
	);
}

export default Logo;