import React from 'react';

class InfoBox extends React.Component{
  render(){
    return(
      <div className=''>
        huj
      </div>
    )
  }
}


class PopUpHead extends React.Component{

  render(){
    return(
      <div className=''>
        dupa
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

  componentWillMount(){
    this.props.shouldShow===true;
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
