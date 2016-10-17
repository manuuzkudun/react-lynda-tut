import React, {Component} from 'react';
import PetApptItem from './pet-appt-item';
import AddAppt from './add-appt';
import axios from 'axios';
import _ from 'lodash';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      appointments: []
    };
    this.removeAppointment = this.removeAppointment.bind(this);
    this.listAppointments = this.listAppointments.bind(this);
  }

  removeAppointment(item) {
    let appts = this.state.appointments;
    appts = _.without(appts,item);
    this.setState({appointments: appts});
  }

  listAppointments(item,index) {
    return (
      <PetApptItem
        key={index}
        onDelete={ item => this.removeAppointment(item) }
        whichItem={ item }
        petName={ item.petName }
        aptDate={ item.aptDate }
        ownerName={ item.ownerName }
        aptNotes={ item.aptNotes }
      />
    );
  }

  componentDidMount(){
    axios.get(this.props.source)
      .then((res) => {
        this.setState({appointments:res.data});
    });
  }

  render() {
    return (
      <div className="interface">
        <AddAppt />
        <ul className="item-list media-list">
          { this.state.appointments.map( this.listAppointments )}
        </ul>
      </div>
    ) //return
  } //render
}
