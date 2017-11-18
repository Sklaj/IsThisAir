import React from 'react';


//Getting Cities list
  export default function getDistance (a, start, end){

    let mode = {mode: 'cors',
                method: 'GET',
                };
    let startPoint = {
      lat:52.230381799999996,
      lon:20.9877956
    };
    let endPoint = {
      lat:52.225157,
      lon:21.014803
    };
    let preLink = 'https://cors-anywhere.herokuapp.com/';
    let link = `https://maps.googleapis.com/maps/api/distancematrix/json?units=imperial&origins=`;
    let destLink = startPoint.lat+','+ startPoint.lon+'&destinations='+endPoint.lat+','+endPoint.lon+'&key=';
    let apiKey = 'AIzaSyDqfIQDoXTC1HNbgm9xtEsIxpsokMbuotM';

    fetch(preLink + link + destLink + apiKey, mode)
      .then(function(response) {
        return response.json()
      })
      .then(function(json) {
        console.log('parsed json', json)
      })
      .catch(function(err) {
        console.log('parsing failed', err)
      })
  };
