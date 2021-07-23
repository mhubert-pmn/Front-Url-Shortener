import React, {useState} from 'react';
import PropTypes from 'prop-types';

import {validateInput} from "../utilities/Validator";
import "./input.scss";

const InputField = ({ value, id, label, placeholder, validators, type }) => {
    const [error, setError] = useState(false);
    const [inputValue, setInputValue] = useState(null);

    const handleChange = (event) => {
        setInputValue(event);
        setError(validateInput(validators, event));
    };

    return (
        <div className="form-group">
            {label && <label htmlFor={id}>{label}</label>}

            {type === 'textarea' ? (
                <textarea
                    className='form-control'
                    placeholder={placeholder}
                    id={id}
                    defaultValue={value}
                    onChange={e => handleChange(e.target.value)}
                />
            ) : (
                <input
                    type={type}
                    id={id}
                    className='form-control'
                    placeholder={placeholder}
                    onChange={e => handleChange(e.target.value)}
                />
            )}
            {error && <span className='text-danger'>{error.message}</span>}
        </div>
    )
};

InputField.propTypes = {
    value: PropTypes.string,
    id: PropTypes.string,
    label: PropTypes.string,
    placeholder: PropTypes.string,
    validators: PropTypes.array,
    type: PropTypes.string,
    onChange: PropTypes.func
};

InputField.defaultProps = {
  value: '',
  id: '',
  label: '',
  placeholder: '',
  type: 'text',
  validators: []
};

export default InputField;