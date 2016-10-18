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
      orderDir: 'asc',
      searchQuery: ''
    };
    this.removeAppointment = this.removeAppointment.bind(this);
    this.listAppointments = this.listAppointments.bind(this);
    this.addDisplay = this.addDisplay.bind(this);
    this.addAppointment = this.addAppointment.bind(this);
    this.setSortProperty = this.setSortProperty.bind(this);
    this.setSortOrder = this.setSortOrder.bind(this);
    this.searchAppointments = this.searchAppointments.bind(this);
  }

  searchAppointments(q) {
    this.setState({
      searchQuery: q
    });
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

  setSortProperty(prop) {
    this.setState({orderBy: prop});
  }

  setSortOrder(prop) {
    this.setState({orderDir: prop});
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
    let filteredAppts = [];
    let orderBy = this.state.orderBy;
    let orderDir = this.state.orderDir;
    let searchQuery = this.state.searchQuery;
    let appointments = this.state.appointments;

    appointments.forEach( appt => {
      if(
        (appt.petName.toLowerCase().indexOf(searchQuery) != -1) ||
        (appt.ownerName.toLowerCase().indexOf(searchQuery) != -1) ||
        (appt.aptDate.toLowerCase().indexOf(searchQuery) != -1) ||
        (appt.aptNotes.toLowerCase().indexOf(searchQuery) != -1)
      ){
        filteredAppts.push(appt);
      }
    });


    filteredAppts = _.sortByOrder(filteredAppts, appt => {
      return appt[orderBy].toLowerCase();
    },orderDir);

    return (
      <div className="interface">
        <AddAppt
          bodyVisible={this.state.apptBodyVisible}
          handleToogle={this.addDisplay}
          addAppt={ this.addAppointment }
        />
        <SearchAppts
          orderBy={this.state.orderBy}
          orderDir={this.state.orderDir}
          sortProperty={this.setSortProperty}
          sortOrder={this.setSortOrder}
          seachTerm={this.searchAppointments}
        />
        <ul className="item-list media-list">
          { filteredAppts.map( this.listAppointments )}
        </ul>
      </div>
    ) //return
  } //render
}
