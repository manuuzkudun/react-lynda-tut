import React, {Component} from 'react';

export default class PetApptItem extends Component {
  constructor(props) {
    super(props);
    this.key = this.props.key;
    this.petName = this.props.petName;
    this.aptDate = this.props.aptDate;
    this.ownerName = this.props.ownerName;
    this.aptNotes = this.props.aptNotes;
  }

  render() {
    return(
      <li className="pet-item media" key={this.key}>
        <div className="pet-info media-body">
          <div className="pet-head">
            <span className="pet-name">{this.petName}</span>
            <span className="apt-date pull-right">{this.aptDate}</span>
          </div>
          <div className="owner-name">
            <span className="label-item">Owner:</span>
            {this.ownerName}
          </div>
          <div className="apt-notes">
            {this.aptNotes}
          </div>
        </div>
      </li>
    );
  }
}
