//Importing React
import React from 'react';
import ReactDOM from 'react-dom';

// //Importing functions
import getLocation from './getLocation.js';
import getCities from './getCities.js';
import getData from './getData.js'

//Importing Big Components
// import PopUp from './popup.jsx'
// import CityPick from './cityPick.jsx'

// Importing important Components
import Search from './search.jsx'
import SearchErr from './searchErr.jsx'
import Localize from './localize.jsx'
import PopUp from './popup.jsx'

// Importing small components
import Logo from './logo.jsx'
import Heading from './heading.jsx'
import Footer from './footer.jsx'



document.addEventListener('DOMContentLoaded', function(){

// Main component - all functionality here
    class Home extends React.Component{

      constructor(props){
        super(props);
        this.state = {
          //Base state elements
          cityList:{},
          inputValue:'',
          pos:{},
          //Should show elements
          popUpShow: false,
          dataShow: false,
          selectShow: false,
          selectErr: false,
          //Info state
          closestStation:'NaN',
          selectedStation: {
            dist: null,
            id: null,
            info: null,
            position: {
              lat: null,
              lng: null
            }
          },
          searchResult: [],
          stationIndex:{
            general: 'Pobieranie...',
            co: 'Pobieranie...',
            no2: 'Pobieranie...',
            pm10: 'Pobieranie...',
            pm25: 'Pobieranie...',
            pm225: 'Pobieranie...'
          }
        }
      }


// Component functions and handlers
      keyPressHandler = (e) => {
        if(e.key == 'Enter'){
          this.submitHandler(e)
        }
      }

      submitHandler = (e) => {
        let searchResult = [];
        for(let i=0; i < this.state.cityList.length; i++){
          if(this.state.cityList[i].city){
            if(this.state.inputValue.toLowerCase() === this.state.cityList[i].city.name.toLowerCase()){
              searchResult.push(this.state.cityList[i]);
            }
          }
        }
        if(searchResult.length > 0){
          this.setState({searchResult: searchResult, popUpShow: true, selectShow: true, selectErr: false})
        } else {
          this.setState({selectErr: true})
        }
      }

      changeHandler = (e) => {
        this.setState({inputValue: e.target.value})
        console.log(e.target.value)
      }

      closestPoint = () => {
        if(this.state.selectedStation.dist){
          for(let i = 0; i < this.state.cityList.length; i++){
            if (this.state.cityList[i].id === this.state.selectedStation.id){
              console.log(this.state.cityList[i])
            }
          }
        }
      }

      localizationHandler = () => {

        getLocation(this);
        this.setState({dataShow: true})
      }

      hidePopupHandler = (e) => {
        if(e.target.className == "overlay"){
          this.setState({selectShow: false, dataShow: false, popUpShow: false});
          this.setState({searchResult: []});
          this.setState({
            stationIndex:{
              general: 'Pobieranie...',
              co: 'Pobieranie...',
              no2: 'Pobieranie...',
              pm10: 'Pobieranie...',
              pm25: 'Pobieranie...',
              pm225: 'Pobieranie...'
            }})
        }
      }

      closeBtnHandler= (e) => {
        if(e.target.className == "closeBtn"){
          this.setState({selectShow: false, dataShow: false, popUpShow: false});
          this.setState({searchResult: []});
          this.setState({
            stationIndex:{
              general: 'Pobieranie...',
              co: 'Pobieranie...',
              no2: 'Pobieranie...',
              pm10: 'Pobieranie...',
              pm25: 'Pobieranie...',
              pm225: 'Pobieranie...'
            }})
        }
      }

      pickCityHandler = (e) => {

        new Promise((res,rej)=>{

          let id = parseInt(e.target.name);
          this.setState({selectedStation: {id: id}})
          let station = {};

          for(let i = 0; i < this.state.cityList.length; i++){
            if(this.state.cityList[i].id === id){
              console.log('dupa')
              station = {
                dist: null,
                id: this.state.cityList[i].id,
                info: this.state.cityList[i],
                position: {
                  lat: Number(this.state.cityList[i].gegrLat),
                  lng: Number(this.state.cityList[i].gegrLon)
                }
              }
              res(station)
            }
          }
        }).then((res)=>{
          return this.setState({selectedStation: res});
        })
        .then((res)=>{
          return getData(this)
        })
        .then((res)=>{
          return this.setState({popUpShow: true, selectShow: false, dataShow: true});
        })

      }

// Component lifecycle
      componentWillMount(){
        getCities(this);
      }
//
// Rendering Main component and passing functions
      render(){

        return(
          <div>
            <Logo/>
            <Heading/>
            <Search
              changeHandler={this.changeHandler.bind(this)}
              inputValue={this.state.inputValue}
              submitHandler={this.submitHandler.bind(this)}
              keyPressHandler={this.keyPressHandler.bind(this)}
            />
            <SearchErr
              shouldShow={this.state.selectErr}
            />
            <Localize
              locate={this.localizationHandler.bind(this)}
            />
            <Footer/>
            <PopUp
              //General props for popup
              popUpShow={this.state.popUpShow}
              hidePopupHandler={this.hidePopupHandler.bind(this)}
              closeBtnHandler={this.closeBtnHandler.bind(this)}
              dataShow={this.state.dataShow}
              selectShow={this.state.selectShow}
              // getDataHandler={this.getDataHandler.bind(this)}

              //props for CityData
              pos={this.state.selectedStation.position}
              stationId={toString(this.state.selectedStation.id)}
              stationName={this.state.selectedStation.info}
              stationIndex={this.state.stationIndex}

              //props for CityPick
              searchResult={this.state.searchResult}
              pickCityHandler={this.pickCityHandler.bind(this)}
              // selectedStation={this.state.selectedStation}
            />

          </div>
        )
      }
    }



// Just rendering app and connecting routes
    class App extends React.Component{
      render(){
        return(
          <div className="wrapper">
            <Home/>
          </div>
        )
      }
    }

    ReactDOM.render(
        <App/>,
        document.getElementById('app')
    );
});
