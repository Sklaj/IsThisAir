import React from 'react';

export default function countDistance(passedThis){

  let distanceArr = [];

  for(let i=0; i < passedThis.state.cityList.length; i++){
    distanceArr.push(
      { dist:
        Math.sqrt(
          Math.pow(passedThis.state.pos.lat - passedThis.state.cityList[i].gegrLat,2) + Math.pow(passedThis.state.pos.long - passedThis.state.cityList[i].gegrLon,2)
        ),
        id: passedThis.state.cityList[i].id
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
  let result = distanceArr[0]

  passedThis.setState({closestStation: result})

}
