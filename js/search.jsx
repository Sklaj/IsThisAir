import React from 'react';

export default class Search extends React.Component{

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
