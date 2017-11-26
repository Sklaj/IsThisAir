import React from 'react';

//Getting Cities list
  export default function getData (passedThis, id){

    let mode = {mode: 'cors',
                method: 'GET',
                };

    let preLink = 'https://cors-anywhere.herokuapp.com/'
    let link = 'api.gios.gov.pl/pjp-api/rest/aqindex/getIndex/'
    let stationId = id
    // let cityList;

    fetch(preLink + link + stationId, mode)
      .then(function(response) {
        return response.json()
      })
      .then(function(json) {
        // console.log('parsed json', json)
        passedThis.setState({stationIndex:json})
      })
      .catch(function(err) {
        console.log('parsing failed', err)
      })
  };
