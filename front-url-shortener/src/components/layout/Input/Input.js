import React from 'react';
import PropTypes from 'prop-types';

import "./input.scss";

const InputField = ({ value, id, label, placeholder, type, onChange }) => {
    return (
        <div className="form-group">
            {label && <label htmlFor={id}>{label}</label>}

            {type === 'textarea' ? (
                <textarea
                    className='form-control'
                    placeholder={placeholder}
                    id={id}
                    defaultValue={value}
                    onChange={onChange}
                />
            ) : (
                <input
                    type={type}
                    id={id}
                    className='form-control'
                    placeholder={placeholder}
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