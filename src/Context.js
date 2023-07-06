import React, { Component } from 'react';
import axios from 'axios'
const UrunContext = React.createContext();

const reducer = (state,action) => {
  switch(action.type){
    case "DELETE_URUN":
    return{
      ...state,
      urunler: state.urunler.filter(urun => action.payload !== urun.id)
    }
    case "URUN_EKLE":
      return{
        ...state,
        urunler: [...state.urunler,action.payload]
      }
     default:
     return state
  }
}

class UrunProvider extends Component {
  state = {
    urunler: [],
      dispatch: action => {
      this.setState(state => reducer(state,action))
    }
  }
  componentDidMount = async () => {
    try {
      const response = await fetch("http://localhost:3000/urunler");
      if (response.ok) {
        const data = await response.json();
        this.setState({
          urunler: data
        });
      } else {
        console.error('Error:', response.statusText);
      }
    } catch (error) {
      console.error('Error:', error);
    }
  }
  
  render() {
    return (
      <UrunContext.Provider value={this.state}>
        {this.props.children}
      </UrunContext.Provider>
    );
  }
}

const UrunConsumer = UrunContext.Consumer;

export { UrunConsumer, UrunProvider };
