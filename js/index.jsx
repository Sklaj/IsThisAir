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
import getDistance from './getDistance.js'
//Google API KEy
let googleApiKey = "AIzaSyDqfIQDoXTC1HNbgm9xtEsIxpsokMbuotM";

document.addEventListener('DOMContentLoaded', function(){

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

    class Search extends React.Component{

      constructor(props){
        super(props);
        this.state={
          inputValue:'',
          cityList:{}
        }
      }

      componentDidMount(){
        getCities(this);
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

      handleKeyPress = (event) => {
        if(event.key == 'Enter'){
          this.submitHandler()
        }
      }

      onFieldChange(e){
        const fieldValue = e.target.value;
        const fieldName = e.target.name;
        this.props.changeHandler(fieldName,fieldValue);
      }

      render(){
        return(
          <div className="row">
            <div className="container search">
              <input
                type="text"
                placeholder='wyszukaj swoje miasto'
                className="search_input"
                onChange={this.onFieldChange.bind(this)}
                onKeyPress={this.handleKeyPress}
                name='Dupa'
                value={this.state.inputValue}
              />
              <input
                type="submit"
                name="" value="Szukaj"
                className="search_submit"
                onClick={this.submitHandler}
              />
            </div>
          </div>
        )
      }
    }

    class Localize extends React.Component{

      constructor(props){
        super(props);
        this.state = {
          pos:{

          }
        }
      }

      componentDidMount(){
        locate(this);
      }

      localizationHandler = () => {
        console.log(this.state.pos)
      }

      render(){
        return(
          <div className="row localize_row">
            <div className="container localize">
              <p>Lub zlokalizuj się akutomatycznie</p>
                {/* <Link to='#'> */}
                  <button
                    type="button"
                    name="button"
                    onClick={this.localizationHandler}
                    >
                      Zlokalizuj mnie
                    </button>
                  {/* </Link> */}


            </div>
          </div>
        )
      }
    }

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


    class Home extends React.Component{

      constructor(props){
        super(props);
        this.state = {
          inputValue:{}
        }
      }

      changeHandler = (fieldName, fieldValue) => {
        this.setState({fieldName: fieldValue})
        console.log(fieldName.target.value)
      }

      componentDidMount(){
        getCities(this);
        getDistance()
      }

      render(){
        return(
          <div>
            <Logo/>
            <Heading/>
            <Search
              changeHandler={this.changeHandler.bind(this)}
            />
            <Localize/>
            <Footer/>
          </div>
        )
      }
    }

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
