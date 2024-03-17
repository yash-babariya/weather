import React from 'react';
import Loader from './Loader';

const Result = (props) => {
    const gettime = (time) => {
        const wdata = new Date(time * 1000);
        return wdata.toLocaleTimeString();
    };

    let showdata = "";

    if (props.weatherdata === null) {
        if (props.loading === true) {
            showdata = <Loader />;
        } else {
            showdata = "";
        }
    } else {
        const { weatherdata: data } = props;
        showdata = (
            <div className='container mt-5'>
                <h1 className='text-center'>Weather description</h1>
                <div className='bg-light p-5'>
                    <img src={`https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`}
                        alt="weather api" />
                    <p className='fs-5'>City: {data.name}</p>
                    <p className='fs-5'>Temp: {data.main.feels_like}</p>
                    <p className='fs-5'>Description: {data.weather[0].description}</p>
                    <table className="table">
                        <tbody>
                            <tr>
                                <th>Feels Like</th>
                                <td>{data.main.feels_like}</td>
                            </tr>
                            <tr>
                                <th>Min Temp</th>
                                <td>{data.main.temp_min}</td>
                            </tr>
                            <tr>
                                <th>Max Temp</th>
                                <td>{data.main.temp_max}</td>
                            </tr>
                            <tr>
                                <th>Sun Rise</th>
                                <td>{gettime(data.sys.sunrise)}</td>
                            </tr>
                            <tr>
                                <th>Sun Set</th>
                                <td>{gettime(data.sys.sunset)}</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        );
    }

    return (
        <div>
            {showdata}
        </div>
    );
};

export default Result;
