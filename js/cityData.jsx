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

class PopUpHead extends React.Component{

  render(){
    return(
      <div className='popup_head'>
        <div className='cityName'>
          <h3>Miasto:</h3>
          <h1>
            {this.props.stationName.city.name}
          </h1>
        </div>
        <div className='cityAdres'>
          <h3>Adres:</h3>
          <h1>{this.props.stationName.addressStreet}</h1>
        </div>
        <div className="status">
          <h3>
            Aktualny status jakości powietrza w obrębie wybranej stacji pomiarowej:
          </h3>
          <h1>{this.props.stationIndex.general}</h1>
        </div>
        <div className='infoBox'>
          <div className="info">
            <h3>NO2:</h3>
            <h2>{this.props.stationIndex.no2}</h2>
          </div>
          <div className="info">
            <h3>CO:</h3>
            <h2>{this.props.stationIndex.co}</h2>
          </div>
          <div className="info">
            <h3>Pyły PM10:</h3>
            <h2>{this.props.stationIndex.pm10}</h2>
          </div>
          <div className="info">
            <h3>Pyły PM2,5:</h3>
            <h2>{this.props.stationIndex.pm25}</h2>
          </div>
        </div>
        <button
          className='closeBtn'
          onClick={this.props.closeBtnHandler}
        >
          Zamknij
        </button>
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
    defaultCenter={props.pos}
  >
    <Marker
      position={props.pos}
    />
  </GoogleMap>
);

export default class CityData extends React.Component{
  render(){
      if(this.props.dataShow === true){
        return(
          <div className="popup">
            <div className="popUpBody">
              <PopUpHead
                stationId={this.props.stationId}
                stationName={this.props.stationName}
                stationIndex={this.props.stationIndex}
                stationIndex={this.props.stationIndex}
                closeBtnHandler={this.props.closeBtnHandler}
              />
            </div>
            <MapWithAMarker
              googleMapURL={"https://maps.googleapis.com/maps/api/js?key="+ googleApiKey +"&v=3.exp&libraries=geometry,drawing,places"}
              loadingElement={<div className='loadingElement' style={{ height: `100%` }} />}
              containerElement={<div className='containerElement' style={{ height: `100%` }} />}
              mapElement={<div className='mapElement' style={{ height: `100%` }} />}
              pos={this.props.pos}
            />
          </div>
        )
      } else {
        return null
      }
  }
}
