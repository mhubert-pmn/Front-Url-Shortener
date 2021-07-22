import React, { useState } from 'react';
import styles from './button.scss';

const Button = ({ children, color = 'none', bgColor, disabled, border, ...props }) => {
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
		backgroundColor : 'black'
	};
	const outlineHoverStyle = {
		color           : 'black',
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
				backgroundColor : btnColor,
				color           : 'black'
			};
			break;
	}
	return (
		<button
			style={

					disabled ? { ...commonStyles, ...btnStyle, ...style } :
					{ ...commonStyles, ...btnStyle, ...style }
			}
			onMouseEnter={toggleHover}
			onMouseLeave={toggleHover}
			{...props}
			type="button"
	
			className={styles.btn}
		>
			{children || 'button'}
		</button>
	);
};

export default Button;