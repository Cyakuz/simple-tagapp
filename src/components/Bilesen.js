import React, { Component } from 'react';

class Bilesen extends Component {
  state = {
    isVisible: false
  }

  toggleVisibility = () => {
    this.setState({ isVisible: !this.state.isVisible });
  };

  handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      this.toggleVisibility();
    }
  };

  render() {
    const { urunBilesen, uyari, fiyat } = this.props; //destructuring özelliği
    const { isVisible } = this.state;

    return (
      <div>
        {
          isVisible ? (
            <div>
              <ul className="flex col-12" style={{ listStyle: 'none' }}>
                <li>
                  <h4>Bileşenler:</h4>
                  <p className="flex flex-column">{urunBilesen}</p>
                </li>
                <li>
                  <h4>Uyarı:</h4> 
                  <p className="flex flex-column">{uyari}</p>
                </li>
                <li>
                  <h4>Fiyatı:</h4>
                  {fiyat}
                </li>
              </ul>
              <i
                className="fa-solid fa-angle-down"
                onClick={this.toggleVisibility}
                onKeyDown={this.handleKeyDown}
                tabIndex={0}
                role="button"
                aria-expanded={isVisible}
                aria-label="Toggle Content"
              ></i>
            </div>
          ) : (
            <i
              className="fa-solid fa-angle-down"
              onClick={this.toggleVisibility}
              onKeyDown={this.handleKeyDown}
              tabIndex={0}
              role="button"
              aria-expanded={isVisible}
              aria-label="Toggle Content"
            ></i>
          )
        }
      </div>
    );
  }
}

export default Bilesen;