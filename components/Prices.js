import React, { Component } from 'react'

class Prices extends Component {
  state = {
    currency: 'USD',
  }
  render() {
    let list = ''

    if (this.state.currency === 'USD') {
      list = <li className="list-group-item">
        Bitcoin rate ({this.props.data.bpi.USD.description}):&nbsp;
        <span className="badge badge-primary">{this.props.data.bpi.USD.code}</span>
        {this.props.data.bpi.USD.rate_float}
      </li>
    } else if(this.state.currency === 'GBP') {
      list = <li className="list-group-item">
        Bitcoin rate ({this.props.data.bpi.GBP.description}):&nbsp;
        <span className="badge badge-primary">{this.props.data.bpi.GBP.code}</span>
        {this.props.data.bpi.GBP.rate_float}
      </li>
    } else if(this.state.currency === 'EUR') {
      list = <li className="list-group-item">
        Bitcoin rate ({this.props.data.bpi.EUR.description}):&nbsp;
        <span className="badge badge-primary">{this.props.data.bpi.EUR.code}</span>
        {this.props.data.bpi.EUR.rate_float}
      </li>
    }

    return (
      <div>
        <ul className="list-group" >
          {list}
        </ul>
        <br />
        <select onChange={e => this.setState({currency:e.target.value})} className="form-control">
          <option value="USD">USD</option>
          <option value="GBP">GBP</option>
          <option value="EUR">EUR</option>
        </select>
      </div>
    )
  }
}

export default Prices