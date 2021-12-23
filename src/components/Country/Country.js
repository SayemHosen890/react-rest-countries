import React from 'react';
import './Country.css'

const Country = (props) => {
    const { name, flag, capital, population, region } = props.country;
    console.log(props.country);
    return (
        <div className="country">
            <img src={flag} alt="" />
            <h4>This is : {name}</h4>
            <h4>Capital : {capital}</h4>
            <p>Population : {population} <span>Region : {region}</span></p>
        </div>
    );
};

export default Country;