import React, {Component} from 'react';
import PetApptList from './pet-appt-list';
import axios from 'axios';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      appointments: []
    };
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
        <PetApptList data={this.state.appointments}/>
      </div>
    ) //return
  } //render
}
