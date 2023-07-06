import React, { Component } from 'react';
import { UrunConsumer } from '../Context';

class Bilesen extends Component {
  state = {
    isVisible: false,
    admintools: false,
  };

  toggleVisibility = () => {
    this.setState((prevState) => ({
      isVisible: !prevState.isVisible,
    }));
  };

  toggleAdminTools = () => {
    this.setState((prevState) => ({
      admintools: !prevState.admintools,
    }));
  };

  handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      this.toggleVisibility();
    }
  };

  componentDidMount() {
    const { pathname } = window.location;
    if (pathname === '/admin') {
      this.setState({ admintools: true });
    } else {
      this.setState({ admintools: false });
    }
  }

  componentDidUpdate(prevProps) {
    if (this.props.id !== prevProps.id && this.props.id) { 
      const { id, dispatch } = this.props;
      this.onDeleteUrun(id, dispatch);
    }
  }

  onDeleteUrun = (id, dispatch) => {
    fetch(`http://localhost:3000/urunler/${id}`, {
      method: 'DELETE'
    })
      .then(response => {
        if (response.ok) {
          dispatch({ type: 'DELETE_URUN', payload: id });
          console.log('Item deleted');
        } else {
          console.error('Error:', response.statusText);
        }
      })
      .catch(error => {
        console.error('Error:', error);
      });
  };
  

  render() {
    const { urunBilesen, uyari, fiyat, id } = this.props;
    const { isVisible, admintools } = this.state;

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
                  <ul className="d-flex justify-content-between">
                    <i
                      className="fa-solid fa-angle-down"
                      onClick={this.toggleVisibility}
                      onKeyDown={this.handleKeyDown}
                      tabIndex={0}
                      aria-expanded={isVisible}
                      aria-label="Hide Content"
                    ></i>
                  </ul>
                </div>
              ) : (
                <ul className="d-flex justify-content-between">
                  <i
                    className="fa-solid fa-angle-down"
                    onClick={this.toggleVisibility}
                    onKeyDown={this.handleKeyDown}
                    tabIndex={0}
                    aria-expanded={isVisible}
                    aria-label="Show Content"
                  ></i>
                  {admintools && (
                    <i
                      className="fa-solid fa-trash"
                      onClick={() => this.onDeleteUrun(id, dispatch)}
                      onKeyDown={this.handleKeyDown}
                      tabIndex={0}
                      aria-expanded={admintools}
                      aria-label="Delete Content"
                    ></i>
                  )}
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
