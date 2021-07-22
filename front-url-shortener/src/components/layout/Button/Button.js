import React, { useState } from 'react';
import styles from './button.scss';

const Button = ({ children, color = 'transparent', disabled, type, border, ...props }) => {
	const [
		hover,
		setHover
	] = useState(false);
	const toggleHover = () => {
		setHover(!hover);
	};
	const commonStyles = {
		border          : `1px solid ${color}`,
		backgroundColor : color,
		color           : 'black'
	};
	const outlineStyles = {
		border          : `1px solid ${color}`,
		color           : color,
		backgroundColor : 'white'
	};
	const outlineHoverStyle = {
		color           : 'white',
		backgroundColor : color
	};

	const roundedStyle = {
		backgroundColor : color,
		color           : 'black',
		borderRadius    : '25px'
	};

	let btnStyle;
	switch (type) {
		case 'rounded':
			btnStyle = roundedStyle;
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
			btnStyle = {
				border          : `1px solid ${color}`,
				backgroundColor : color,
				color           : 'black'
			};
			break;
	}
	return (
		<button
			style={

					disabled ? { ...commonStyles, ...btnStyle} :
					{ ...commonStyles, ...btnStyle,}
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