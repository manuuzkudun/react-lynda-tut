import React, {Component} from 'react';
import PetApptList from './pet-appt-list';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [
              {
                  "petName": "Buffy",
                  "ownerName": "Hassum Harrod",
                  "aptDate": "2016-06-20 15:30",
                  "aptNotes": "This Chihuahua has not eaten for three days and is lethargic"
              }, {
                  "petName": "Spot",
                  "ownerName": "Constance Smith",
                  "aptDate": "2016-06-24 08:30",
                  "aptNotes": "This German Shepherd is having some back pain"
              }, {
                  "petName": "Goldie",
                  "ownerName": "Barot Bellingham",
                  "aptDate": "2016-06-22 15:50",
                  "aptNotes": "This Goldfish has some weird spots in the belly"
              }, {
                  "petName": "Mitten",
                  "ownerName": "Hillary Goldwyn",
                  "aptDate": "2016-06-21 9:15",
                  "aptNotes": "Cat has excessive hairballs"
              }
            ]
        };
    }

    render() {
      return (
        <div className="interface">
          <PetApptList data={this.state.data}/>
        </div>
        ) //return
    } //render
}
