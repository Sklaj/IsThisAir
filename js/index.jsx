//Importing React
import React from 'react';
import ReactDOM from 'react-dom';
import {
        Router,
        Route,
        Link,
        IndexLink,
        IndexRoute,
        hashHistory
        } from 'react-router';

// //Importing components
// import MapApp from './mapapp.jsx'
//
// //Importing functions
import locate from './getLocation.js';
import getCities from './getCities.js';
import countDistance from './countDistance.js'

//Google API KEy
let googleApiKey = "AIzaSyDqfIQDoXTC1HNbgm9xtEsIxpsokMbuotM";

document.addEventListener('DOMContentLoaded', function(){

// Top static elements
    class Logo extends React.Component{
      render(){
        return(
          <div className="row">
            <div className="container logo">
              <img src="img/logo.png" alt="dupa"/>
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
                placeholder='wyszukaj swoje miasto'
                className="search_input"
                onChange={this.props.changeHandler}
                onKeyPress={this.props.keyPressHandler}
                name='Dupa'
                value={this.props.inputValue}
              />
              <input
                type="submit"
                name="" value="Szukaj"
                className="search_submit"
                onClick={this.props.submitHandler}
              />
            </div>
          </div>
        )
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
          closestStation:'NaN'
        }
      }


// Component functions and handlers
      keyPressHandler = (e) => {
        if(e.key == 'Enter'){
          this.submitHandler(e)
        }
      }

      submitHandler = (e) => {
        for(let i=0; i < this.state.cityList.length; i++){
          if(this.state.cityList[i].city){
            if(this.state.inputValue.toLowerCase() === this.state.cityList[i].city.name.toLowerCase()){
              console.log('Nazwa Miasta:' + this.state.cityList[i].city.name)
              console.log('ID Miasta:' + this.state.cityList[i].city.id)
              console.log('ID Stacji:' + this.state.cityList[i].id)
              console.log('lat: ' + this.state.cityList[i].gegrLat)
              console.log('lat: ' + this.state.cityList[i].gegrLon)
            } else {
                console.log('To nie to miasto!')
            }
          }
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
        countDistance(this);
      }


// Component lifecycle
      componentDidMount(){
        getCities(this);
      }

      // shouldComponentUpdate(){
      //   if(this.state.closestStation.dist){
      //     return true;
      //   } else {
      //     return false;
      //   }
      // }
      //
      // componentDidUpdate(){
      //   // console.log(this.state.closestStation)
      //   this.closestPoint()
      //   // this.closestPoint()
      //   // if(this.state.closestStation.dist !== NaN){
      //   //   console.log(this.state.closestStation)
      //   // }
      // }

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
            <Localize locate={this.localizationHandler.bind(this)}/>
            <Footer/>
          </div>
        )
      }
    }





// Just rendering app and connecting routes
    class App extends React.Component{
      render(){
        return(
          <div className="wrapper">
            <Router history={hashHistory}>
              <Route path='/' component={Home}>
                <IndexRoute component={Home}/>
                {/* <Route path='/mapapp' component={MapApp}>
                </Route> */}
              </Route>
            </Router>
          </div>
        )
      }
    }

    ReactDOM.render(
        <App/>,
        document.getElementById('app')
    );
});
