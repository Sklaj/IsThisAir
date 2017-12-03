import React from 'react';
import CityData from './cityData.jsx'
import CityPick from './cityPick.jsx'

export default class PopUp extends React.Component{

  render(){
    if(this.props.popUpShow === true){
      return(
        <div
          className="overlay"
          onClick={this.props.hidePopupHandler}
          >
            <CityData
              dataShow={this.props.dataShow}
              pos={this.props.pos}
              stationId={this.props.stationId}
              stationName={this.props.stationName}
              stationIndex={this.props.stationIndex}
              closeBtnHandler={this.props.closeBtnHandler}
            />
            <CityPick
              closeBtnHandler={this.props.closeBtnHandler}
              selectShow={this.props.selectShow}
              searchResult={this.props.searchResult}
              pickCityHandler={this.props.pickCityHandler}
              stationShow={this.props.stationShow}
            />
        </div>
      )
    } else {
      return null
    }
  }
};
