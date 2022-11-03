import React, { useState } from 'react';
import './Header_Style.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faBed,
  faPlane,
  faCar,
  faTaxi,
  faCalendarDays,
  faPerson,
} from '@fortawesome/free-solid-svg-icons';
import { DateRange } from 'react-date-range';
import 'react-date-range/dist/styles.css';
import 'react-date-range/dist/theme/default.css';
import { format } from 'date-fns';

const Header_Index = () => {
  const [openDate, setOpenDate] = useState(false);
  const [date, setDate] = useState([
    {
      startDate: new Date(),
      endDate: new Date(),
      key: 'selection',
    },
  ]);
  const [openOption, setOpenOption] = useState(false);

  const [options, setOptions] = useState({
    adult: 1,
    children: 0,
    room: 1,
  });

  const handleChange = (name, operation) => {
    setOptions((prev) => {
      return {
        ...prev,
        [name]: operation === 'inc' ? options[name] + 1 : options[name] - 1,
      };
    });
  };
  return (
    <div className="header">
      <div className="header_container">
        <div className="header_list">
          <div className="header_list_items active">
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
        <h1 className="header_title">Anywhere Anytime with BookTRIP</h1>
        <p className="title_description">
          Get rewarded for your travels - unlock instant savings of 10% or more
          with a free BookTRIP account
        </p>
        <button className="header_btn">Sign In / Register</button>
        <div className="search_container">
          <div className="search_item">
            <FontAwesomeIcon icon={faBed} className="header_icon" />
            <input
              type="text"
              placeholder="Where are you going?"
              className="search_input"
            />
          </div>
          <div className="search_item">
            <FontAwesomeIcon
              icon={faCalendarDays}
              className="header_icon"
              onClick={() => setOpenDate(!openDate)}
            />
            <span
              onClick={() => setOpenDate(!openDate)}
              className="search_text"
            >{`${format(date[0].startDate, 'mm/dd/yyyy')} to ${format(
              date[0].endDate,
              'mm/dd/yyyy'
            )} `}</span>
            {openDate && (
              <DateRange
                editableDateInputs={true}
                onChange={(item) => setDate([item.selection])}
                moveRangeOnFirstSelection={false}
                ranges={date}
                className="search_calender"
              />
            )}
          </div>
          <div className="search_item">
            <FontAwesomeIcon
              icon={faPerson}
              onClick={() => setOpenOption(!openOption)}
              className="header_icon"
            />
            <span
              onClick={() => setOpenOption(!openOption)}
              className="search_text"
            >{`${options.adult} adult - ${options.children} children - ${options.room} room`}</span>
            {openOption && (
              <div className="options">
                <div className="option_item">
                  <span className="option_text">Adult</span>
                  <div className="option_counter">
                    <button
                      disabled={options.adult <= 1}
                      className="option_conter_btn"
                      onClick={() => handleChange('adult', 'dec')}
                    >
                      -
                    </button>
                    <span className="option_counter_number">
                      {options.adult}
                    </span>
                    <button
                      className="option_conter_btn"
                      onClick={() => handleChange('adult', 'inc')}
                    >
                      +
                    </button>
                  </div>
                </div>
                <div className="option_item">
                  <span className="option_text">Children</span>
                  <div className="option_counter">
                    <button
                      disabled={options.children <= 0}
                      className="option_conter_btn"
                      onClick={() => handleChange('children', 'dec')}
                    >
                      -
                    </button>
                    <span className="option_counter_number">
                      {options.children}
                    </span>
                    <button
                      className="option_conter_btn"
                      onClick={() => handleChange('children', 'inc')}
                    >
                      +
                    </button>
                  </div>
                </div>
                <div className="option_item">
                  <span className="option_text">Room</span>
                  <div className="option_counter">
                    <button
                      disabled={options.room <= 1}
                      className="option_conter_btn"
                      onClick={() => handleChange('room', 'dec')}
                    >
                      -
                    </button>
                    <span className="option_counter_number">
                      {options.room}
                    </span>
                    <button
                      className="option_conter_btn"
                      onClick={() => handleChange('room', 'inc')}
                    >
                      +
                    </button>
                  </div>
                </div>
              </div>
            )}
          </div>
          <div className="search_item">
            <button className="header_btn">Search</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header_Index;
