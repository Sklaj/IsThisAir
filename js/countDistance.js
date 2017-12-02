import React from 'react';
import getData from './getData.js'

export default function countDistance(passedThis){

  let distanceArr = [];
  let result;

  for(let i=0; i < passedThis.state.cityList.length; i++){

    let distance = Math.sqrt(
      Math.pow(
        passedThis.state.pos.lat - Number(passedThis.state.cityList[i].gegrLat),2
      )
      +
      Math.pow(
        passedThis.state.pos.lng - Number(passedThis.state.cityList[i].gegrLon),2
      )
    )

    distanceArr.push(
      { dist: distance,
        id: passedThis.state.cityList[i].id,
        info: passedThis.state.cityList[i],
        position: {
          lat: Number(passedThis.state.cityList[i].gegrLat),
          lng: Number(passedThis.state.cityList[i].gegrLon)
        }
      }
    )
  }

  function compare(a,b) {
    if (a.dist < b.dist){
      return -1;
    }else if (a.dist > b.dist){
      return 1;
    } else {
      return 0;
    }
  }
  distanceArr.sort(compare)
  result = distanceArr[0]

  passedThis.setState({selectedStation: result})
  getData(passedThis);
}
