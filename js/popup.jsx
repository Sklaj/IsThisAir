import React from 'react';
import getData from './getData.js'

const { compose } = require("recompose");
const {
  withScriptjs,
  withGoogleMap,
  GoogleMap,
  Marker,
} = require("react-google-maps");

let googleApiKey = "AIzaSyDqfIQDoXTC1HNbgm9xtEsIxpsokMbuotM";

class InfoBox extends React.Component{
  render(){
    return(
      <div className='infoBox'>
        <div className="info">
          <h2>box1</h2>
          <p>tak sobie</p>
        </div>
        <div className="info">
          <h2>box2</h2>
          <p>ujdzie</p>
        </div>
        <div className="info">
          <h2>box3</h2>
          <p>good</p>
        </div>
      </div>
    )
  }
}


class PopUpHead extends React.Component{

  render(){
    return(
      <div className='popup_head'>
        <h1>{"Miasto: " + this.props.stationName.name}</h1>
        <h2>{this.props.stationAdress}</h2>
        <div
          className="status"
        >
          <p>{this.props.stationIndex}</p>
        </div>
      </div>
    )
  }
}

const MapWithAMarker = compose(
  withScriptjs,
  withGoogleMap
)(props =>
  <GoogleMap
    defaultZoom={10}
    defaultCenter={props.position}
  >
    <Marker
      position={props.position}
    />
  </GoogleMap>
);

export default class PopUp extends React.Component{

  constructor(props){
    super(props);
    this.state = {
      stationId: '',
      stationIndex:''
    }
  }

  componentDidMount(){
    getData(this, this.props.statinId)
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
                  // showData={this.porps.showData}
                  stationId={this.props.stationId}
                  stationName={this.props.stationName}
                  // stationAdress={this.props.stationAdress}
                  // stationIndex={this.props.stationIndex}
                />
                <InfoBox/>
              </div>
              <MapWithAMarker
                googleMapURL={"https://maps.googleapis.com/maps/api/js?key="+ googleApiKey +"&v=3.exp&libraries=geometry,drawing,places"}
                loadingElement={<div className='loadingElement' style={{ height: `100%` }} />}
                containerElement={<div className='containerElement' style={{ height: `100%` }} />}
                mapElement={<div className='mapElement' style={{ height: `100%` }} />}
                position={this.props.pos}
              />
              </div>
            </div>
      )
    } else {
      return null;
    }
  }
}
