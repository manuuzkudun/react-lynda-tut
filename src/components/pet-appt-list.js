import React, {Component} from 'react';
import PetApptItem from './pet-appt-item';


export default class PetApptList extends Component {
  constructor(props) {
    super(props);
    this.data = this.props.data;
    this.eachDataItem = this.eachDataItem.bind(this);
  }
  eachDataItem(item,index) {
    return (
      <PetApptItem
        key={index}
        petName={item.petName}
        aptDate={item.aptDate}
        ownerName={item.ownerName}
        aptNotes={item.aptNotes}
      />
    );
  }

  render() {
    return (
      <ul className="item-list media-list">
        { this.data.map( this.eachDataItem )}
      </ul>
    );
  }
}
