import React, { Component } from 'react'

export default class Step extends Component {
  render() {
    const { title, texts, actions } = this.props.step;
    return (
      <div className='container-fluid'>
        <h2>{title}</h2>
        <hr/>
        {texts.map(text =>
          <p key={Math.random()}>{text}</p>
        )}
        <hr/>
        <ul>
          {actions.map(action => {
            return (
              <li key={Math.random()} style={{ listStyle: 'none' }}>
                {action.possible ?
                  (
                    <button className='btn btn-link' onClick={() => this.props.execute(action.text)}>{action.text}</button>
                  )
                  :
                  (
                    <button className='btn btn-link text-muted' disabled>{action.text}</button>
                  )
                }
              </li>
            )
          })}
        </ul>
      </div>
    )
  }
}
