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
import Locate from './getLocation';
import getCities from './getCities.js';


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
          cityList:{

          }
        }
      }

      componentDidMount(){
        getCities(this);
      }

      submitHandler = (e) => {

        console.log('działa')

        for(let i; i < this.state.cityList.length; i++){
          if(this.state.inputValue === this.state.cityList[i].city.name){
            console.log('Nazwa Miasta:' + this.state.cityList[i].city.name)
            console.log('ID Miasta:' + this.state.cityList[i].city.id)
            console.log('ID Stacji:' + this.state.cityList[i].id)
          }else {
            console.log('Nie ma takiego miasta')
          }
        }
        // console.log(this.state.cityList)

        // for(let i; i < this.state.cityList.length; i++){
        //   console.log(this.state.cityList[i].city.name)
        // }
        //   for(var i = 0; i < this.state.cityList.length; i++){
        //     if(this.state.cityList[i].city == null){
        //       console.log("PUSTY REKORD..............." + i)
        //     } else {
        //       console.log(
        //         this.state.cityList[i].city.name
        //       )
        //     }
        //   }
      }

      changeHandler = (e) => {
        this.setState({inputValue:e.target.value})
        console.log(this.state.inputValue)
      }

      render(){
        return(
          <div className="row">
            <div className="container search">
              <input
                type="text"
                placeholder='wyszukaj swoje miasto'
                className="search_input"
                onChange={this.changeHandler}
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

      localizationHandler = () => {
        // Locate();
        // getCities()
      }

      render(){
        return(
          <div className="row localize_row">
            <div className="container localize">
              <p>Lub zlokalizuj się akutomatycznie</p>
                <Link to='#'>
                  <button
                    type="button"
                    name="button"
                    onClick={this.localizationHandler}
                    >
                      Zlokalizuj mnie
                    </button>
                  </Link>


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
                ©Piotrek Chodkowski
              </footer>
            </div>
          </div>
        )
      }
    }


    class Home extends React.Component{
      render(){
        return(
          <div>
            <Logo/>
            <Heading/>
            <Search/>
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
