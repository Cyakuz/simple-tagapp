import React, { Component } from 'react';

const UrunContext = React.createContext();

export class UrunProvider extends Component {
  state = {
    urunler: [
      {
        id: "1",
        title: "Pasta No: 0",
        fiyat: "240",
      },
      {
        id: "2",
        title: "Pasta No: 1",
        fiyat: "240",
      },
    ]
  }

  render() {
    return (
      <UrunContext.Provider value={this.state}>
        {this.props.children}
      </UrunContext.Provider>
    )
  }
}

const UrunConsumer = UrunContext.Consumer;

export { UrunConsumer, UrunProvider };
