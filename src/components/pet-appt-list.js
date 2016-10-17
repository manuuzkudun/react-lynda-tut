import React, {Component} from 'react';
import PetApptItem from './pet-appt-item';


export default class PetApptList extends Component {
  constructor(props) {
    super(props);
    this.eachDataItem = this.eachDataItem.bind(this);
  }



  eachDataItem(item,index) {
    return (
      <PetApptItem
        key={index}
        onDelete={ this.props.removeAppt(this.props.whichItem) }
        whichItem={ item }
        petName={ item.petName }
        aptDate={ item.aptDate }
        ownerName={ item.ownerName }
        aptNotes={ item.aptNotes }
      />
    );
  }

  render() {
    return (
      <ul className="item-list media-list">
        { this.props.data.map( this.eachDataItem )}
      </ul>
    );
  }
}
