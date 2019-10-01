import PropTypes from 'prop-types';
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

function AddressLabel({ person }){
    return(
        <div>
            <div className="address-name">{person.fullName}</div>
            <div className="address-street">{person.address.street}</div>
            <div className="address-city">{person.address.city + ', ' + person.address.zipcode + ', ' + person.address.country}</div>
        </div>
    );
}
function Envelope({fromPerson, toPerson}){
    return(
    <div class="envelope">
        <AddressLabel className="from-person" person={fromPerson}/>
        <AddressLabel className="to-person" person={toPerson}/>
    </div>
    );
}

const testPerson = {
    isSender = True,
    fullName: "Piotr Prusinski",
    address: {
        street: "Pl. Europoejski 1",
        city: "Warsaw",
        zipcode: "00-001",
        country: "Poland",
    }
}
const adzioszka = {
    fullName: "Adzioszka",
    address: {
        street: "Saska Kepa",
        city: "Warsaw",
        zipcode: "00-001",
        country: "Poland",
    }
}
ReactDOM.render(<Envelope fromPerson={testPerson} toPerson={adzioszka}/>, document.querySelector('#root'));

