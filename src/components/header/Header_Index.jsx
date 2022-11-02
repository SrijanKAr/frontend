import React from 'react';
import './Header_Style.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faBed,
  faPlane,
  faCar,
  faTaxi,
} from '@fortawesome/free-solid-svg-icons';
const Header_Index = () => {
  return (
    <div className="header">
      <div className="header_list">
        <div className="header_list_items">
          <FontAwesomeIcon icon={faBed} />
          <span>Stays</span>
        </div>
        <div className="header_list_items">
          <FontAwesomeIcon icon={faPlane} />
          <span>Flights</span>
        </div>
        <div className="header_list_items">
          <FontAwesomeIcon icon={faCar} />
          <span>Car Rentals</span>
        </div>
        <div className="header_list_items">
          <FontAwesomeIcon icon={faBed} />
          <span>Attractions</span>
        </div>
        <div className="header_list_items">
          <FontAwesomeIcon icon={faTaxi} />
          <span>Taxi</span>
        </div>
      </div>
    </div>
  );
};

export default Header_Index;
