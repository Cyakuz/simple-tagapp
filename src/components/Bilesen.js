import React, { Component } from 'react';
import { UrunConsumer } from '../Context';

class Bilesen extends Component {
  state = {
    isVisible: false
  };

  toggleVisibility = () => {
    this.setState((prevState) => ({
      isVisible: !prevState.isVisible
    }));
  };

  handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      this.toggleVisibility();
    }
  };

  render() {
    const { urunBilesen, uyari, fiyat } = this.props;
    const { isVisible } = this.state;

    return (
      <UrunConsumer>
        {(value) => {
          const { dispatch } = value;

          return (
            <div>
              {isVisible ? (
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
                  <ul>
                    <i
                      className="fa-solid fa-angle-down"
                      onClick={this.toggleVisibility}
                      onKeyDown={this.handleKeyDown}
                      tabIndex={0}
                      role="button"
                      aria-expanded={isVisible}
                      aria-label="Hide Content"
                    ></i>
                    <i
                      className="fa-solid fa-trash"
                      onClick={this.toggleVisibility}
                      onKeyDown={this.handleKeyDown}
                      tabIndex={0}
                      role="button"
                      aria-expanded={isVisible}
                      aria-label="Delete Content"
                    ></i>
                  </ul>
                </div>
              ) : (
                <ul>
                  <i
                    className="fa-solid fa-angle-down"
                    onClick={this.toggleVisibility}
                    onKeyDown={this.handleKeyDown}
                    tabIndex={0}
                    role="button"
                    aria-expanded={isVisible}
                    aria-label="Show Content"
                  ></i>
                  <i
                    className="fa-solid fa-trash"
                    onClick={this.toggleVisibility}
                    onKeyDown={this.handleKeyDown}
                    tabIndex={0}
                    role="button"
                    aria-expanded={isVisible}
                    aria-label="Delete Content"
                  ></i>
                </ul>
              )}
            </div>
          );
        }}
      </UrunConsumer>
    );
  }
}

export default Bilesen;