import React from 'react';
import "./Popup.css"

function Popup(props){
      return (
        <div className='popup'>
          <div className='popup_inner'>
            <h1>{props.headline}</h1>
            <p>{props.summary}</p>
          <button onClick={props.closePopup}>Dismiss</button>
          </div>
        </div>
      );
    };

export default Popup;