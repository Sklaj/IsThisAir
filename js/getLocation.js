import React from 'react';
//Geolocation

import countDistance from './countDistance.js'

export default function getLocation (passedThis){
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(showPosition);
    } else {
      console.log('brak lokalizacji')
    };
    function showPosition(position) {
      passedThis.setState({pos: {lat: position.coords.latitude, lng:position.coords.longitude}});
      countDistance(passedThis);
      passedThis.setState({popUpShow: true})
    };
};
