import React, { useRef, useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import './input.scss';


export const Input = ({ onlyRead, dark, label, error, errorLabel, value, disabled, onChange, type, ...props }) => {
  const mode = onlyRead ? 'onlyRead' : '';
  const status = disabled ? 'disabled' : '';
  const theme = dark ? 'dark-theme' : '';
  const isError = error ? 'error' : '';
  const inputRef = useRef(null);
  const [isFocus, toggleFocus] = useState(false);
  const hasFocus = isFocus ? 'focus' : '';
  // const [inputValue, setInputValue] = useState('');

  useEffect(() =>{
    inputRef.current.value !== '' && toggleFocus(true)
  },[]);

  return (<div className={['nexi-input--container', mode, theme].join(' ')}>
    <p className={['nexi-label', mode, hasFocus, status, theme].join(' ')}>{label}</p>
    {/* {console.log(inputRef.current)} */}
    <input
      type={type}
      className={['nexi-input', mode, status, theme, isError].join(' ') }
      {...props}
      ref={inputRef}
      onFocus={() => {inputRef.current.value === '' && toggleFocus(!isFocus)}}
      onBlur={() => {inputRef.current.value === '' && toggleFocus(!isFocus)}}
      value={value}
    />
    {isError && <p className={['nexi-errorLabel', theme].join(' ')}>{errorLabel}</p>}
    </div>
  );
};

Input.propTypes = {
  /**
  * Input Types like number, password, string
  */
  type: PropTypes.oneOf(['number', 'password', 'text']),
  /**
   * Input not editable
   */
  onlyRead: PropTypes.bool,
  /**
   * Input label
   */
  label: PropTypes.string.isRequired,
  /**
   * Error
   */
  error: PropTypes.bool,
  /**
  * Error message
  */
  errorLabel:PropTypes.string,
  /**
   * Disabled
   */
  disabled: PropTypes.bool,
  /**
   * Dark Background?
   */
  dark:PropTypes.bool,
  // /**
  //  * Value of the input
  //  */
  value: PropTypes.string,
};

Input.defaultProps = {
  type: 'text',
  onlyRead: false,
  label: '',
  errorLabel: '',
  error: false,
  disabled: false,
  dark: false,
  value: '',
};
