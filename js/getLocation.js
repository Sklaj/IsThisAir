import React from 'react';
//Geolocation

export default function locate(a){
  console.log('dupaaaa')

    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(showPosition);
      console.log('ddddd')
    } else {
      console.log('brak lokalizacji')
    }

    function showPosition(position) {
      a.setState({pos: {lat: position.coords.latitude, long:position.coords.longitude}});
      console.log(position.coords.latitude)
      console.log(position.coords.longitude)
    };
};
