import React from 'react';
//Geolocation

export default function locate(a){
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(showPosition);
    } else {
      console.log('brak lokalizacji')
    };
    function showPosition(position) {
      a.setState({pos: {lat: position.coords.latitude, long:position.coords.longitude}});
    };
};
