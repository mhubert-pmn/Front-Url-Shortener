import React from 'react';
import PropTypes from 'prop-types';

import "./input.scss";

const InputField = ({ value, id, label, placeholder, validators, type, required, onChange }) => {

    return (
        <div className="form-group">
            {label && <label htmlFor={id}>{label}{required && "*"}</label>}

            {type === 'textarea' ? (
                <textarea
                    className='form-control'
                    placeholder={placeholder}
                    id={id}
                    defaultValue={value}
                    required={required}
                    onChange={onChange}
                />
            ) : (
                <input
                    type={type}
                    id={id}
                    className='form-control'
                    placeholder={placeholder}
                    required={required}
                    onChange={onChange}
                />
            )}
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