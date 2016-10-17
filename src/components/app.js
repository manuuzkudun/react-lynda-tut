import React, {Component} from 'react';
import PetApptList from './pet-appt-list';
import axios from 'axios';
import _ from 'lodash';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      appointments: []
    };
    this.removeAppointment = this.removeAppointment.bind(this);
  }

  removeAppointment(item) {
    let appts = this.state.appointments;
    appts = _.without(appts,item);
    this.setState(appts);
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
        <PetApptList
          data={this.state.appointments}
          removeAppt={this.removeAppointment}
          />
      </div>
    ) //return
  } //render
}
