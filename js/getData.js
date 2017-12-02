import React from 'react';

//Getting Cities list
  export default function getData (passedThis){

    let mode = {mode: 'cors',
                method: 'GET',
                };

    let preLink = 'https://cors-anywhere.herokuapp.com/'
    let link = 'api.gios.gov.pl/pjp-api/rest/aqindex/getIndex/'
    let stationId = passedThis.state.selectedStation.id
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
          pm25: 'BrakDanych - Błąd Bazy',
          pm225: 'BrakDanych - Błąd Bazy'
          }
        })
      }).then(function(json){
        passedThis.setState({stationIndex:{
          general: responseResult.stIndexLevel ? responseResult.stIndexLevel.indexLevelName : 'brakDanych',
          no2: responseResult.no2IndexLevel ? responseResult.no2IndexLevel.indexLevelName : 'brakDanych',
          co: responseResult.coIndexLevel ? responseResult.coIndexLevel.indexLevelName : 'brakDanych',
          pm10: responseResult.pm10IndexLevel ? responseResult.pm10IndexLevel.indexLevelName : 'brakDanych',
          pm25: responseResult.pm25IndexLevel ? responseResult.pm25IndexLevel.indexLevelName : 'brakDanych',
          }
        })
      })
  };
