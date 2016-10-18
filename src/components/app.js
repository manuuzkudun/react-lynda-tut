import React, {Component} from 'react';
import PetApptItem from './pet-appt-item';
import AddAppt from './add-appt';
import SearchAppts from './search-appts';
import axios from 'axios';
import _ from 'lodash';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      appointments: [],
      apptBodyVisible: false,
      orderBy: 'petName',
      orderDir: 'asc'
    };
    this.removeAppointment = this.removeAppointment.bind(this);
    this.listAppointments = this.listAppointments.bind(this);
    this.addDisplay = this.addDisplay.bind(this);
    this.addAppointment = this.addAppointment.bind(this);
  }

  addAppointment(appt) {
    let appts = this.state.appointments;
    appts.push(appt);
    this.setState({appointments: appts});
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

  addDisplay() {
    this.setState({apptBodyVisible: !this.state.apptBodyVisible});
  }

  render() {
    let filteredAppts = this.state.appointments;
    let orderBy = this.state.orderBy;
    let orderDir = this.state.orderDir;
    filteredAppts = _.orderBy(filteredAppts, appt => {
      return appt[orderBy].toLowerCase();
    },orderDir);

    return (
      <div className="interface">
        <AddAppt
          bodyVisible={this.state.apptBodyVisible}
          handleToogle={this.addDisplay}
          addAppt={ this.addAppointment }
        />
        <SearchAppts />
        <ul className="item-list media-list">
          { filteredAppts.map( this.listAppointments )}
        </ul>
      </div>
    ) //return
  } //render
}
