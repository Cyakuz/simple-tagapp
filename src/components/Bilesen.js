import React, { useState, useEffect } from 'react';
import { UrunConsumer } from '../Context';
import { useLocation } from 'react-router-dom';

const Bilesen = ({ urunBilesen, uyari, fiyat , id })  => { //Destruction
  const [isVisible, setIsVisible] = useState(false);
  const [admintools, setAdmintools] = useState(false);
  const location = useLocation();

  const toggleVisibility = () => {
    setIsVisible((prevVisibility) => !prevVisibility);
  };

  const toggleAdminTools = () => {
    setAdmintools((prevAdmintools) => !prevAdmintools);
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      toggleVisibility();
    }
  };

  useEffect(() => {
    if (location.pathname === '/admin') {
      setAdmintools(true);
    } else {
      setAdmintools(false);
    }
  }, [location]);

  const onDeleteUrun = (dispatch, id) => {
     dispatch({ type: 'DELETE_URUN', payload: id }); 
    };

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
                    onClick={toggleVisibility}
                    onKeyDown={handleKeyDown}
                    tabIndex={0}
                    aria-expanded={isVisible}
                    aria-label="Hide Content"
                  ></i>
                  {admintools && (
                 <i
                 className="fa-solid fa-trash"
                 onClick={() => onDeleteUrun(dispatch, id)}
                 onKeyDown={handleKeyDown}
                 tabIndex={0}
                 aria-expanded={admintools}
                 aria-label="Delete Content"
               ></i>
                  )}
                </ul>
              </div>
            ) : (
              <ul className="d-flex justify-content-between">
                <i
                  className="fa-solid fa-angle-down"
                  onClick={toggleVisibility}
                  onKeyDown={handleKeyDown}
                  tabIndex={0}
                  aria-expanded={isVisible}
                  aria-label="Show Content"
                ></i>
                {admintools && (
                <i
                className="fa-solid fa-trash"
                onClick={() => onDeleteUrun(dispatch, id)}
                onKeyDown={handleKeyDown}
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
};

export default Bilesen;