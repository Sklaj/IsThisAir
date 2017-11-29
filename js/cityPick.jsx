import React from 'react';

class InfoBox extends React.Component{
  render(){
    return(
      <div className=''>
        xx
      </div>
    )
  }
}


class PopUpHead extends React.Component{

  render(){
    return(
      <div>
        {this.props.searchResult.map(function(currentValue, index){
          return (
            <div
              key={currentValue.id}
              className='resultBox'
              >
              <h2>{currentValue.stationName}</h2>
              <h3>{currentValue.addressStreet}</h3>
            </div>
          );
        })}
      </div>
    )
  }

}



export default class CityPick extends React.Component{

  constructor(props){
    super(props);
    this.state = {
    }
  }

  render(){

    if(this.props.shouldShow === true){
      return(
        <div
          className="overlay"
          onClick={this.props.hidePopupHandler}
          >
            <div className="popup">

              <div className="popUpBody">
                <PopUpHead
                  stationId={this.props.stationId}
                  stationName={this.props.stationName}
                  stationIndex={this.props.stationIndex}
                  searchResult={this.props.searchResult}
                />
                <InfoBox
                  stationIndex={this.props.stationIndex}
                />
              </div>

              </div>
            </div>
      )
    } else {
      return null;
    }
  }
}
