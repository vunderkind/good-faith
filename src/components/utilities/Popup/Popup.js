import React from 'react';
import "./Popup.css";
import Button from '../Button/Button'

function Popup(props){
      return (
        <div className='popup'>
          <div className='popup_inner'>
            <h1>{props.headline}</h1>
            <p>{props.summary}</p>
            {props.context? <p><a href={props.context}>More details</a></p>: null}
            <br/>
          <Button type="primary" 
          onClick={props.closePopup}>
              Dismiss
              </Button>
          </div>
        </div>
      );
    };

export default Popup;