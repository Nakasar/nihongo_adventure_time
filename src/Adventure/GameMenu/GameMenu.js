import React, { Component } from 'react'

export default class GameMenu extends Component {
  render() {
    return (
      <div>
        <div className='border-bottom text-right'> 
          <button className={`btn btn-link ${this.props.saved && 'text-success'}`} onClick={this.props.saveAdventure}>{this.props.saved ? 'ほぞん　しました！' : '保存　する'}</button>
          <button className='btn btn-link text-danger' onClick={this.props.quitAdventure}>出口</button>
        </div>
      </div>
    )
  }
}
