import React, { Component } from 'react';
import './App.css';

import Header from './Header';
import MainContent from './MainContent'; 

class App extends Component {

  state = {
    isFiltered: false,
    pendingGuest: "",
    guests: []
  };

  lastGuestId = 0;

  newGuestId = () => {
    const id = this.lastGuestId;
    this.lastGuestId += 1;
    return id;
  };

  toggleGuestProperty = (property, id) => 
  this.setState({
    guests: this.state.guests.map(guest => {
      if (id === guest.id){
        return {
          ...guest,
          [property]: !guest[property],
        };
      }
      return guest;
    })
  });

  toggleConfirmation = id =>
    this.toggleGuestProperty("isConfirmed", id);

  toggleEditing = id =>
    this.toggleGuestProperty("isEditing", id);

  removeGuestAt = id =>
    this.setState({
      guests: this.state.guests.filter(guest => id !== guest.id)
    });

  setName = (name, indexToChange) => 
    this.setState({
      guests: this.state.guests.map((guest, index) => {
        if (index === indexToChange){
          return {
            ...guest,
            name
          };
        }
        return guest;
      })
    });

  toggleFiltered = () =>
    this.setState({ isFiltered: !this.state.isFiltered });

  handleNameInput = e =>
    this.setState({ pendingGuest: e.target.value });

  newGuestSubmitHandler = e => {
    e.preventDefault();
    const id = this.newGuestId();
    this.setState({
      guests: [
        {
          name: this.state.pendingGuest,
          isConfirmed: false,
          isEditing: false,
          id
        },
        ...this.state.guests
      ],
      pendingGuest: ''
    })
  }

  getTotalInvited = () => this.state.guests.length;
  
  getAttendingGuests = () =>
    this.state.guests.reduce(
      (total, guest) => guest.isConfirmed ? total + 1 : total, 
      0
    );

  render() {
    const totalInvited = this.getTotalInvited();
    const numberAttending = this.getAttendingGuests();
    const numberUnconfirmed = totalInvited - numberAttending
    return (
      <div className="App">
        <Header 
          newGuestSubmitHandler={this.newGuestSubmitHandler}
          handleNameInput={this.handleNameInput}
          pendingGuest={this.state.pendingGuest}
        />
        <MainContent 
          toggleFiltered={this.toggleFiltered}
          isFiltered={this.state.isFiltered}
          totalInvited={totalInvited}
          numberAttending={numberAttending}
          numberUnconfirmed={numberUnconfirmed}
          guests={this.state.guests}
          toggleConfirmation={this.toggleConfirmation}
          toggleEditing={this.toggleEditing}
          setName={this.setName}
          removeGuestAt={this.removeGuestAt}
          pendingGuest={this.state.pendingGuest}
        />
    </div>
    );
  }
}

export default App;
