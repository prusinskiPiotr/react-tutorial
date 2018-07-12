import React from 'react';
import PropTypes from 'prop-types';

const GuestList = props => 
<ul>
    {props.guests.map((guests, index) =>
    <li key={index}>
        <span>{guests.name}</span>
        <label>
            <input type="checkbox" checked={guests.isConfirmed}/> Confirmed
        </label>
        <button>edit</button>
        <button>remove</button>
    </li>
    )}
</ul>;

GuestList.propTypes = {
    guests: PropTypes.array.isRequired,
}

export default GuestList;