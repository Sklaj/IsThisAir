import React from 'react';

export default class Logo extends React.Component{
  render(){
    return(
      <div className="row">
        <div className="container logo">
          <img
            src="img/logo.png"
            alt="Logo"
          />
        </div>
      </div>
    )
  }
}
