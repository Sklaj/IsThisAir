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
          general: json.stIndexLevel.indexLevelName ? json.stIndexLevel.indexLevelName : 'brak danych',
          no2: json.no2IndexLevel.indexLevelName ? json.no2IndexLevel.indexLevelName : 'brak danych',
          co: json.coIndexLevel.indexLevelName ? json.coIndexLevel.indexLevelName : 'brak danych',
          pm10: json.pm10IndexLevel.indexLevelName ? json.pm10IndexLevel.indexLevelName : 'brak danych',
          pm25: json.pm25IndexLevel.indexLevelName ? json.pm25IndexLevel.indexLevelName : 'brak danych'
          }
        })
      })
      .catch(function(err) {
        console.log('parsing failed', err)
      })
  };
