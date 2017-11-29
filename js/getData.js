import React from 'react';

//Getting Cities list
  export default function getData (passedThis){

    let mode = {mode: 'cors',
                method: 'GET',
                };

    let preLink = 'https://cors-anywhere.herokuapp.com/'
    let link = 'api.gios.gov.pl/pjp-api/rest/aqindex/getIndex/'
    let stationId = passedThis.state.closestStation.id
    let responseResult;

    fetch(preLink + link + stationId, mode)
      .then(function(response) {
        return response.json()
      })
      .then(function(json) {
        // console.log('parsed json', json)
        responseResult = json;
      })
      .catch(function(err) {
        console.log('parsing failed', err)
        passedThis.setState({stationIndex:{
          general: 'BrakDanych - Błąd Bazy',
          no2: 'BrakDanych - Błąd Bazy',
          co: 'BrakDanych - Błąd Bazy',
          pm10: 'BrakDanych - Błąd Bazy',
          pm25: 'BrakDanych - Błąd Bazy'
          }
        })
      }).then(function(json){
        passedThis.setState({stationIndex:{
          general: responseResult.stIndexLevel.indexLevelName ? responseResult.stIndexLevel.indexLevelName : 'brakDanych',
          no2: responseResult.no2IndexLevel.indexLevelName ? responseResult.no2IndexLevel.indexLevelName : 'brakDanych',
          co: responseResult.coIndexLevel.indexLevelName ? responseResult.coIndexLevel.indexLevelName : 'brakDanych',
          pm10: responseResult.pm10IndexLevel.indexLevelName ? responseResult.pm10IndexLevel.indexLevelName : 'brakDanych',
          pm25: responseResult.pm25IndexLevel.indexLevelName? responseResult.pm25IndexLevel.indexLevelName : 'brakDanych'
          }
        })
      })
  };
