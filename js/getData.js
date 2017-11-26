import React from 'react';

//Getting Cities list
  export default function getData (passedThis){

    let mode = {mode: 'cors',
                method: 'GET',
                };

    let preLink = 'https://cors-anywhere.herokuapp.com/'
    let link = 'api.gios.gov.pl/pjp-api/rest/aqindex/getIndex/'
    let stationId = passedThis.state.closestStation.id
    // let cityList;

    fetch(preLink + link + stationId, mode)
      .then(function(response) {
        return response.json()
      })
      .then(function(json) {
        // console.log('parsed json', json)
        passedThis.setState({stationIndex:{
          general: json.stIndexLevel.indexLevelName,
          no2: json.no2IndexLevel.indexLevelName,
          co: json.coIndexLevel.indexLevelName,
          pm10: json.pm10IndexLevel.indexLevelName,
          pm25: json.pm25IndexLevel.indexLevelName
          }
        })
      })
      .catch(function(err) {
        console.log('parsing failed', err)
      })
  };
