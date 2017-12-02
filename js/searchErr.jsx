import React from 'react';

export default class SearchErr extends React.Component{
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
