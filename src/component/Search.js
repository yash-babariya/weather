// components/Search.js
import React from 'react';
import img2 from "../img/draw1.webp";
import '../styles/Search.scss';

const Search = (props) => {
  return (
    <div className="container">
      <div className='search-container'>
        <div className='form-container'>
          <label htmlFor="" className='form-label'>Enter City Name</label>
          <input type="text" className='form-input' name='city' placeholder='Enter City Name' onChange={props.change} value={props.city} />
          <input type="button" value="Search" className='form-button' onClick={props.citysearch} />
          <div className='location-button' onClick={props.location}>
            <span className="material-symbols-outlined location-icon">my_location</span>
            <span className='form-label'>Get coordinates</span>
          </div>
          <label htmlFor="" className='form-label mt-4'>Lat:</label>
          <input type="text" className='form-input' name='lat' placeholder='Enter latitude' onChange={props.change} value={props.lat} />
          <label htmlFor="" className='form-label'>Lon:</label>
          <input type="text" className='form-input' name='lon' placeholder='Enter longitude' onChange={props.change} value={props.lon} />
          <input type="button" value="Search" className='form-button mt-3' onClick={props.search} />
        </div>
        <div className='image-container'>
          <img src={img2} alt="" className='image' />
        </div>
      </div>
    </div>
  );
};

export default Search;
