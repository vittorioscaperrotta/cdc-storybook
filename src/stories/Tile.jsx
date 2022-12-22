import React from 'react';
import PropTypes from 'prop-types';
import './tile.scss';
import { Icon } from './Icon';

export const Tile = props => {
  return (
  <div className={`nexi_portal__tile ${props.disabled ? 'disabled' : ''} ${props.entirelyClickable ? 'entirelyClickable' : ''} ${props.width100 ? 'width100' : ''} ${props.dark ? 'Dark' : props.pagopa ? 'pagoPa' : ''}`}>
    <div className="container" onClick={props.entirelyClickable ? () => props.buttonAction() : ''}>
      <div className="info-content">
        {props.image ? (
          <img src={props.image} alt="icon" className="image" />
        ) : ('')}
        {props.icon ? (
         <Icon name="nexi-user small"></Icon>
        ) : ('')}
        <div className="content">
          <div className="title-container">
            {props.title ? <p className="title">{props.title}</p> : ''}
            {props.imgTitle ? <img src={props.imgTitle} className="img-title" alt="logo pagopa" /> : ''}
          </div>
          {props.message ? <p className="message">{props.message}</p> : ''}
        </div>
      </div>
      {!props.entirelyClickable && props.buttonText && props.buttonText !== 'noBtn' ?
        <button
          className="action_button"
          onClick={() => props.buttonAction()}
        >
          {props.buttonText}
        </button>
        : !props.entirelyClickable && props.buttonText === 'noBtn'
          ? <button className="close" onClick={() => props.buttonAction()}>
              <Icon name="nexi-close medium black"></Icon>
          </button>
        : ''}
    </div>
  </div>
);
}

Tile.propTypes = {
  title: PropTypes.string,
  message: PropTypes.string,
  buttonText: PropTypes.string,
  buttonAction: PropTypes.func,
  // type: PropTypes.string,
  dark: PropTypes.bool,
  image: PropTypes.string,
  imgTitle: PropTypes.string,
  icon: PropTypes.bool,
  entirelyClickable: PropTypes.bool,
  pagopa: PropTypes.bool,
  width100: PropTypes.bool,
  disabled: PropTypes.bool
};

Tile.defaultProps = {
  title: '',
  message: '',
  buttonText: '',
  buttonAction: () => undefined,
  // type: '',
  dark: false,
  image: '',
  imgTitle: '',
  icon: false,
  entirelyClickable: false,
  pagopa: false,
  width100: false,
  disabled: false
};


