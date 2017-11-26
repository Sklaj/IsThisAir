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
          <h2>NO2</h2>
          <p>{this.props.stationIndex.no2}</p>
        </div>
        <div className="info">
          <h2>CO</h2>
          <p>{this.props.stationIndex.co}</p>
        </div>
        <div className="info">
          <h2>Pyły PM10</h2>
          <p>{this.props.stationIndex.pm10}</p>
        </div>
        <div className="info">
          <h2>Pyły PM25</h2>
          <p>{this.props.stationIndex.pm25}</p>
        </div>
      </div>
    )
  }
}


class PopUpHead extends React.Component{

  render(){
    return(
      <div className='popup_head'>
        <h1>{"Miasto: " + this.props.stationName.city.name}</h1>
        <h2>{this.props.stationName.addressStreet}</h2>
        <div
          className="status"
        >
          <h3>
            Aktualny status jakości powietrza w obrębie wybranej stacji pomiarowej:
          </h3>
          <h1>{this.props.stationIndex.general}</h1>
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
    defaultZoom={13}
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
                  // showData={this.porps.showData}
                  stationId={this.props.stationId}
                  stationName={this.props.stationName}
                  stationIndex={this.props.stationIndex}
                  // stationAdress={this.props.stationAdress}

                />
                <InfoBox
                  stationIndex={this.props.stationIndex}
                />
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
