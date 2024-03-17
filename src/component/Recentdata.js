import React from 'react';

const Recentdata = ({ recent, research }) => {
  return (
    <div className='container mt-3'>
      <h3 className='text-center'>Recent Data</h3>
      <ul>
        {recent.map((item, index) => (
          <li key={index} onClick={() => research(item.lat, item.lon)}>
            {item.city}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Recentdata;
