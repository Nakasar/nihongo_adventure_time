import React, { Component } from 'react'

export default class MainMenu extends Component {
  render() {
    return (
      <div style={{ paddingTop: '40vh' }} className='text-center'>
        <h1>日本　の　冒険</h1>
        <div className='list-group flush align-items-center'>
          <button className='list-item btn btn-secondary m-1' onClick={this.props.startNewAdventure}>新しい　話</button>
          <button className='list-item btn btn-secondary m-1' onClick={this.props.continueAdventure} disabled={!this.props.hasSave}>ゲーム　を　つずける</button>
        </div>
        <p className='text-info'>By Kevin Thizy.</p>
      </div>
    )
  }
}
