import React from 'react';

export default class SearchAppts extends React.Component {
  constructor(props) {
    super(props);
    this.handleSort = this.handleSort.bind(this);
    this.handleOrder = this.handleOrder.bind(this);
    this.handleSearch = this.handleSearch.bind(this);
  }

  handleSort(e) {
    this.props.sortProperty(e.target.id);
  }

  handleOrder(e) {
    this.props.sortOrder(e.target.id);
  }

  handleSearch(e) {
    this.props.seachTerm(e.target.value);
  }

  render(){
    return(
      <div className="row search-appointments">
        <div className="col-sm-offset-3 col-sm-6">
          <div className="input-group">
            <input id="SearchApts" placeholder="Search" onChange={this.handleSearch} type="text" className="form-control" aria-label="Search Appointments" />
            <div className="input-group-btn">
              <button type="button" className="btn btn-primary dropdown-toggle"
                data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Sort by: <span className="caret"></span></button>
                <ul className="dropdown-menu dropdown-menu-right">
                  <li><a href="#" onClick={ this.handleSort } id="petName">Pet Name {(this.props.orderBy === 'petName') ? <span className="glyphicon glyphicon-ok"></span> : null}
                  </a></li>
                  <li><a href="#" onClick={ this.handleSort } id="aptDate">Date {(this.props.orderBy === 'aptDate') ? <span className="glyphicon glyphicon-ok"></span> : null}
                  </a></li>
                  <li><a href="#" onClick={ this.handleSort } id="ownerName">Owner {(this.props.orderBy === 'ownerName') ? <span className="glyphicon glyphicon-ok"></span> : null}
                  </a></li>
                  <li role="separator" className="divider"></li>
                  <li><a href="#" onClick={ this.handleOrder } id="asc">Asc {(this.props.orderDir === 'asc') ? <span className="glyphicon glyphicon-ok"></span> : null}
                  </a></li>
                  <li><a href="#" onClick={ this.handleOrder } id="desc">Desc {(this.props.orderDir === 'desc') ? <span className="glyphicon glyphicon-ok"></span> : null}
                  </a></li>
                </ul>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
