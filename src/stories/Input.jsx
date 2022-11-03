import React, { useRef, useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import './input.css';


export const Input = ({ onlyRead, dark, label, error, errorLabel, disabled, ...props }) => {
  const mode = onlyRead ? 'nexi-input--onlyRead' : 'nexi-input';
  const status = disabled ? 'disabled' : '';
  const theme = dark ? 'dark-theme' : '';
  const isError = error ? 'error' : '';
  const inputRef = useRef(null);
  const [isFocus, toggleFocus] = useState(false);
  const hasFocus = isFocus ? 'focus' : '';

  useEffect(() =>{
    inputRef.current.value !== '' && toggleFocus(true)
  },[]);

  return (<div className='nexi-input--container'>
    <p className={['nexi-label', mode, hasFocus, status].join(' ')}>{label}</p>
    <input
      type="text"
      className={['nexi-input', mode, status, theme, isError].join(' ') }
      {...props}
      ref={inputRef}
      onFocus={() => {inputRef.current.value === '' && toggleFocus(!isFocus)}}
      onBlur={() => {inputRef.current.value === '' && toggleFocus(!isFocus)}}
    />
    {isError && <p className='nexi-errorLabel'>{errorLabel}</p>}
    </div>
  );
};

Input.propTypes = {
  /**
   * Is this the principal call to action on the page?
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
};

Input.defaultProps = {
  onlyRead: false,
  disabled: false,
  dark: false,
  error: false,
};
