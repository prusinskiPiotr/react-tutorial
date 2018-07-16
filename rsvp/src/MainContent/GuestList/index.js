import React from 'react';
import PropTypes from 'prop-types';

import Guest from './Guest';
import PendingGuest from './PendingGuest'

const GuestList = props => 
<ul>
    <PendingGuest name={props.pendingGuest}/>
    {props.guests
        .filter(guest => !props.isFiltered || guest.isConfirmed)
        .map((guests, index) =>
        <Guest 
            key={index} 
            name={guests.name}
            isConfirmed={guests.isConfirmed}
            isEditing={guests.isEditing}
            handleConfirmation={() => props.toggleConfirmation(guests.id)}
            handleEditing={() => props.toggleEditing(guests.id)}
            handleRemove={() => props.removeGuestAt(guests.id)}
            setName={text => props.setName(text, guests.id)}
        />
    )}
</ul>;

GuestList.propTypes = {
    guests: PropTypes.array.isRequired,
    toggleConfirmation: PropTypes.func.isRequired,
    toggleEditing: PropTypes.func.isRequired,
    setName: PropTypes.func.isRequired,
    isFiltered: PropTypes.bool.isRequired,
    removeGuestAt: PropTypes.func.isRequired,
    pendingGuest: PropTypes.string.isRequired,
}

export default GuestList;