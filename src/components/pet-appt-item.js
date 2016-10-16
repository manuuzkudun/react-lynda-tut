import React, {Component} from 'react';

export default class PetApptItem extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return(
      <li className="pet-item media">
        <div className="pet-info media-body">
          <div className="pet-head">
            <span className="pet-name">{this.props.petName}</span>
            <span className="apt-date pull-right">{this.props.aptDate}</span>
          </div>
          <div className="owner-name">
            <span className="label-item">Owner:</span>
            {this.props.ownerName}
          </div>
          <div className="apt-notes">
            {this.props.aptNotes}
          </div>
        </div>
      </li>
    );
  }
}
