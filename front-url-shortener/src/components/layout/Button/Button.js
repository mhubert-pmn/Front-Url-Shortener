import React, { useState } from 'react';
import './button.scss';

const Button = ({ children, disabled, type, ...props }) => {
	const [hover, setHover] = useState(false);

	const toggleHover = () => {
		setHover(!hover);
	};

	// Button styles
	const commonStyles = {
		border          : '2px solid #FFC900',
		backgroundColor : '#FFC900',
		color           : '#000'
	};

	const commonHoverStyles = {
		border          : '2px solid #FFC900',
		backgroundColor : 'transparent',
		color           : '#000'
	};

	const outlineStyles = {
		border          : '2px solid #000',
		backgroundColor : 'transparent',
		color 					: '#000'
	};

	const outlineHoverStyle = {
		border					: '2px solid #000',
		backgroundColor : '#000',
		color           : '#FFF'
	};

	const blackStyle = {
		border					: '2px solid #000',
		backgroundColor : '#000',
		color           : '#FFF',
	};

	const blackHoverStyle = {
		border					: '2px solid #000',
		backgroundColor : 'transparent',
		color           : '#000',
	};

	let btnStyle;

	// Applying style depending on the prop type
	switch (type) {
		case 'common':
			if (hover) {
				btnStyle = commonHoverStyles;
			}
			else {
				btnStyle = commonStyles;
			}
			break;
		case 'outline':
			if (hover) {
				btnStyle = outlineHoverStyle;
			}
			else {
				btnStyle = outlineStyles;
			}
			break;
		default:
			if (hover) {
				btnStyle = blackHoverStyle;
			}
			else {
				btnStyle = blackStyle;
			}
			break;
	}

	return (
		<button
			style={
				disabled ? {
					...commonStyles, ...btnStyle
				} : {
					...commonStyles, ...btnStyle
				}
			}
			onMouseEnter={toggleHover}
			onMouseLeave={toggleHover}
			{...props}
			type="button"
	
			className="btn"
		>
			{children || 'button'}
		</button>
	);
};

export default Button;