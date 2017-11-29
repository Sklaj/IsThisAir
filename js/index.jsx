//Importing React
import React from 'react';
import ReactDOM from 'react-dom';

// //Importing functions
import locate from './getLocation.js';
import getCities from './getCities.js';
import getData from './getData.js'

//Importing Components
import PopUp from './popup.jsx'
import CityPick from './cityPick.jsx'


document.addEventListener('DOMContentLoaded', function(){

// Top static elements
    class Logo extends React.Component{
      render(){
        return(
          <div className="row">
            <div className="container logo">
              <img
                src="img/logo.png"
                alt="Logo"
              />
            </div>
          </div>
        )
      }
    }


    class Heading extends React.Component{
      render(){
        return(
          <div className="row">
            <div className="container heading">
              <h1>Wyszukaj miasto:</h1>
            </div>
          </div>
        )
      }
    }


// Search element
    class Search extends React.Component{

      render(){
        return(
          <div className="row">
            <div className="container search">
              <input
                type="text"
                placeholder='Wpisz nazwę miasta'
                className="search_input"
                onChange={this.props.changeHandler}
                onKeyPress={this.props.keyPressHandler}
                name='Dupa'
                value={this.props.inputValue}
              />
              <input
                type="submit"
                name=""
                value="Szukaj"
                className="search_submit"
                onClick={this.props.submitHandler}
              />
            </div>
          </div>
        )
      }
    }

    class SearchErr extends React.Component{
      render(){
        if(this.props.shouldShow === true){
          return(
            <div>
              <h3>Brak miasta w bazie - spróbuj wyszukac inne miasto</h3>
            </div>
          )
        } else {
          return null
        }
      }
    }


//Localize element
    class Localize extends React.Component{

      render(){
        return(
          <div className="row localize_row">
            <div className="container localize">
              <p>
                Lub zlokalizuj się akutomatycznie
              </p>
              <button
                type="button"
                name="button"
                onClick={this.props.locate}
              >
                Zlokalizuj mnie
              </button>
            </div>
          </div>
        )
      }
    }


// Static footer element
    class Footer extends React.Component{
      render(){
        return(
          <div className="row">
            <div className="container footer">
              <footer>
                  Aplikacja dziala tylko na terenie polski ©Piotrek Chodkowski
              </footer>
            </div>
          </div>
        )
      }
    }


// Main component - all functionality here
    class Home extends React.Component{

      constructor(props){
        super(props);
        this.state = {
          pos:{},
          cityList:{},
          inputValue:'',
          closestStation:'NaN',
          popUpShow: false,
          selectShow: false,
          selectErr: false,
          searchResult: [],
          stationIndex:{
            general: 'Pobieranie...',
            co: 'Pobieranie...',
            no2: 'Pobieranie...',
            pm10: 'Pobieranie...',
            pm25: 'Pobieranie...',
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
          this.setState({searchResult: searchResult, selectShow: true, selectErr: false})
        } else {
          this.setState({selectErr: true})
        }
      }

      changeHandler = (e) => {
        this.setState({inputValue: e.target.value})
        console.log(e.target.value)
      }

      closestPoint = () => {
        if(this.state.closestStation.dist){
          for(let i = 0; i < this.state.cityList.length; i++){
            if (this.state.cityList[i].id === this.state.closestStation.id){
              console.log(this.state.cityList[i])
            }
          }
        }
      }

      localizationHandler = () => {
        locate(this);
      }


      hidePopupHandler = (e) => {
        if(e.target.className == "overlay"){
          this.setState({popUpShow: false});
        }
      }

      hideSelectHandler = (e) => {
        if(e.target.className == "overlay"){
          this.setState({selectShow: false});
          this.setState({searchResult: []})
        }
      }

// Component lifecycle
      componentWillMount(){
        getCities(this);
      }

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
              shouldShow={this.state.popUpShow}
              hidePopupHandler={this.hidePopupHandler.bind(this)}
              pos={this.state.closestStation.position}
              stationId={toString(this.state.closestStation.id)}
              stationName={this.state.closestStation.name}
              stationIndex={this.state.stationIndex}
            />
          <CityPick
            hidePopupHandler={this.hideSelectHandler.bind(this)}
            shouldShow={this.state.selectShow}
            searchResult={this.state.searchResult}
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
