import React, { Component } from 'react'

export default class GameMenu extends Component {
  render() {
    return (
      <div>
        <div className='row border-bottom justify-content-between'>
          <div className='col'>
            <button className='btn btn-link text-info disabled'>日本語 アドベンチャー</button>
            <a href='https://kevin.thizy.eu' className='btn btn-link'>by Kevin Thizy</a>
          </div> 
          <div className='col text-right'>
            <button className={`btn btn-link ${this.props.saved && 'text-success'}`} onClick={this.props.saveAdventure}>{this.props.saved ? 'ほぞん　しました！' : '保存　する'}</button>
            <button className='btn btn-link text-danger' onClick={this.props.quitAdventure}>出口</button>
          </div>
        </div>
      </div>
    )
  }
}
