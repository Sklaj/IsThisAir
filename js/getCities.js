import React from 'react';

//Google API KEy
let googleApiKey = "AIzaSyDqfIQDoXTC1HNbgm9xtEsIxpsokMbuotM";


//Getting Cities list
  export default function getCities (passedThis){

    let mode = {mode: 'cors',
                method: 'GET',
                };

    let preLink = 'https://cors-anywhere.herokuapp.com/'
    let link = `api.gios.gov.pl/pjp-api/rest/station/findAll`;

    // let cityList;

    fetch(preLink + link, mode)
      .then(function(response) {
        return response.json()
      })
      .then(function(json) {
        // console.log('parsed json', json)
        passedThis.setState({cityList:json})
      })
      .catch(function(err) {
        console.log('parsing failed', err)
      })
      // .then(function(){
      //   for(var i = 0; i < cityList.length; i++){
      //     if(cityList[i].city == null){
      //       console.log("PUSTY REKORD..............." + i)
      //     } else {
      //       console.log(
      //         cityList[i].city.name
      //       )
      //     }
      //   }
      // })
  };
