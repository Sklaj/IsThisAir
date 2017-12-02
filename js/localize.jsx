import React from 'react';

export default class Localize extends React.Component{

  render(){
    return(
      <div className="row localize_row">
        <div className="container localize">
          <p>
            Lub zlokalizuj się akutomatycznie
          </p>
          <button
            type="button"
            name="button"
            onClick={this.props.locate}
          >
            Zlokalizuj mnie
          </button>
        </div>
      </div>
    )
  }
}
