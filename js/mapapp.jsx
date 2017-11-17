import React from 'react';
import getLocation from './getLocation';

export default class MapApp extends React.Component{


    mapHandler(){
      let googleApiKey = "AIzaSyDqfIQDoXTC1HNbgm9xtEsIxpsokMbuotM";
      function initMap() {
          var uluru = {lat: -25.363, lng: 131.044};
          var map = new google.maps.Map(document.getElementByClassName('map'), {
            zoom: 4,
            center: uluru
          });
          var marker = new google.maps.Marker({
            position: uluru,
            map: map
          });
        }

        var map, infoWindow;
        function initMap() {
          map = new google.maps.Map(document.getElementByClassName('map'), {
            center: {lat: -34.397, lng: 150.644},
            zoom: 6
          });
          infoWindow = new google.maps.InfoWindow;

          // Try HTML5 geolocation.
          if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(function(position) {
              var pos = {
                lat: position.coords.latitude,
                lng: position.coords.longitude
              };

              infoWindow.setPosition(pos);
              infoWindow.setContent('Location found.');
              infoWindow.open(map);
              map.setCenter(pos);
            }, function() {
              handleLocationError(true, infoWindow, map.getCenter());
            });
          } else {
            // Browser doesn't support Geolocation
            handleLocationError(false, infoWindow, map.getCenter());
          }
        }

        componentDidMount(){
          this.mapHandler()
        }

        function handleLocationError(browserHasGeolocation, infoWindow, pos) {
          infoWindow.setPosition(pos);
          infoWindow.setContent(browserHasGeolocation ?
                                'Error: The Geolocation service failed.' :
                                'Error: Your browser doesn\'t support geolocation.');
          infoWindow.open(map);
        }
  }

  render(){
    return(
      <div className='mapApp'>
        <div className='map'>

          <script async defer
              src="https://maps.googleapis.com/maps/api/js?key=AIzaSyDqfIQDoXTC1HNbgm9xtEsIxpsokMbuotM&callback=initMap">
              </script>
        </div>
      </div>
    )
  }
}
