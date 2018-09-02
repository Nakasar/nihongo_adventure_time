import React, { Component } from 'react'

export default class Inventory extends Component {
  render() {
    return (
      <div className='container-fluid'>
        <h2>アイテム</h2>
        <div className='list-group flush'>
          {this.props.inventory.map(item => 
            <div className='list-group-item' key={Math.random()}>{item.name}</div>
          )}
        </div>
      </div>
    )
  }
}
