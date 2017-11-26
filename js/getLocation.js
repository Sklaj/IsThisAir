import React from 'react';
//Geolocation

import countDistance from './countDistance.js'
import getData from './getData.js'

export default function locate(passedThis){
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(showPosition);
    } else {
      console.log('brak lokalizacji')
    };
    function showPosition(position) {
      passedThis.setState({pos: {lat: position.coords.latitude, lng:position.coords.longitude}});
      countDistance(passedThis);
      getData(passedThis);
      passedThis.setState({shouldShow: true})
    };
};
