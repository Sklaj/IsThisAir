import React from 'react';
import GoogleMapReact from 'google-map-react'


let googleApiKey = "AIzaSyDqfIQDoXTC1HNbgm9xtEsIxpsokMbuotM";

// const AnyReactComponent = ({ text }) => <div>{ text }</div>;

export default class Map extends React.Component {
  static defaultProps = {
    center: { lat: 40.7446790, lng: -73.9485420 },
    zoom: 11
  }
render() {
    return (
      <div className='google-map'>
        <GoogleMapReact
          bootstrapURLKeys={{
            key: googleApiKey,
            language: 'pl'
          }}
          defaultCenter={ this.props.center }
          defaultZoom={ this.props.zoom }>
          <AnyReactComponent
            lat={ 40.7473310 }
            lng={ -73.8517440 }
            text={ "Where's Waldo?" }
          />
        </GoogleMapReact>
      </div>
    )
  }
}

  //   // export default function map(){
  //
  //     let googleApiKey = "AIzaSyDqfIQDoXTC1HNbgm9xtEsIxpsokMbuotM";
  //
  //     // Note: This example requires that you consent to location sharing when
  //     // prompted by your browser. If you see the error "The Geolocation service
  //     // failed.", it means you probably did not give permission for the browser to
  //     // locate you.
  //     var map, infoWindow;
  //     export default function initMap() {
  //       map = new google.maps.Map(document.getElementById('map'), {
  //         center: {lat: 52.220070, lng: 19.690656},
  //         zoom: 7
  //       });
  //       infoWindow = new google.maps.InfoWindow;
  //
  //       // Try HTML5 geolocation.
  //       if (navigator.geolocation) {
  //         navigator.geolocation.getCurrentPosition(function(position) {
  //           var pos = {
  //             lat: position.coords.latitude,
  //             lng: position.coords.longitude
  //           };
  //
  //           //setting position on map
  //           infoWindow.setPosition(pos);
  //           infoWindow.setContent('Tutaj dupadupa');
  //           infoWindow.open(map);
  //           map.setCenter(pos);
  //           map.setZoom(15);
  //         }, function() {
  //           handleLocationError(true, infoWindow, map.getCenter());
  //         });
  //       } else {
  //         // Browser doesn't support Geolocation
  //         handleLocationError(false, infoWindow, map.getCenter());
  //       }
  //     }
  //
  //     function handleLocationError(browserHasGeolocation, infoWindow, pos) {
  //       infoWindow.setPosition(pos);
  //       infoWindow.setContent(browserHasGeolocation ?
  //                             'Error: The Geolocation service failed.' :
  //                             'Error: Your browser doesn\'t support geolocation.');
  //       infoWindow.open(map);
  //     }
  // // }
