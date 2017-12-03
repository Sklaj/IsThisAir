import React from 'react';

class Select extends React.Component{

  generateList = (currentValue, index) => {
    return (
      <div
        key={currentValue.id}
        className='select'
      >
        <div className='textbox'>
          <h2>{currentValue.stationName}</h2>
          <p>{currentValue.addressStreet}</p>
        </div>
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
          <h2>Wyszukane stacje pomiarowe w wybranej lokalizacji:</h2>
          {this.props.searchResult.map(this.generateList)}
        </div>
      )
    } else {
      return null
    }
  }

}



export default class CityPick extends React.Component{

  render(){
    if(this.props.selectShow === true){
      return(
        <div className="selectPopUp">
          <div className="selectPopUpBody">
            <Select
              stationId={this.props.stationId}
              stationName={this.props.stationName}
              stationIndex={this.props.stationIndex}
              searchResult={this.props.searchResult}
              pickCityHandler={this.props.pickCityHandler}
              selectShow={this.props.selectShow}
            />
            <button
              className='closeBtn'
              onClick={this.props.closeBtnHandler}
            >
              Zamknij
            </button>
          </div>
        </div>
      )
    } else {
      return null;
    }
  }
}
