import React from 'react';

class InfoBox extends React.Component{
  render(){
    return(
      <div className=''>
        xx
      </div>
    )
  }
}


class PopUpHead extends React.Component{

  generateList = (currentValue, index) => {
    return (
      <div
        key={currentValue.id}
        className='resultBox'
        >
        <h2>{currentValue.stationName}</h2>
        <p>{currentValue.addressStreet}</p>
        <button
          type="button"
          name={currentValue.id}
          data-id={currentValue.id}
          // data-info={currentValue}
          data-positionGegrLat={Number(currentValue.gegrLat)}
          data-positionGegrLon={Number(currentValue.gegrLon)}
          onClick={this.props.pickCityHandler}
        >
          Wybierz
        </button>
      </div>
    );
  }



  render(){
    if(this.props.selectShow == true){
      return(
        <div>
          <h2>Wyszukane stacje pomiarowe w wybranej lokalizacji: </h2>
          {this.props.searchResult.map(this.generateList)}
        </div>
      )
    } else {
      return (
        <InfoBox/>
      )
    }
  }

}



export default class CityPick extends React.Component{

  constructor(props){
    super(props);
    this.state = {
    }
  }


    // if(this.props.selectedStation.id !== null){
    //   this.props.getDataHandler
    // }


  render(){
    if(this.props.selectShow === true){
      return(
        <div className="popup">
          <div className="popUpBody">
            <PopUpHead
              stationId={this.props.stationId}
              stationName={this.props.stationName}
              stationIndex={this.props.stationIndex}
              searchResult={this.props.searchResult}
              pickCityHandler={this.props.pickCityHandler}
              selectShow={this.props.selectShow}
            />

          </div>
        </div>
      )
    } else {
      return null;
    }
  }
}
