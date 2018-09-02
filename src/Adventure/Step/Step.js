import React, { Component } from 'react'

export default class Step extends Component {
  render() {
    const { title, texts, actions } = this.props.step;
    return (
      <div className='container-fluid'>
        <h2>{title}</h2>
        <hr style={{ borderColor: 'violet' }} />
        {texts.map(text => {
          if (text.startsWith('/imgs/')) {
            return (
              <div className='text-center mb-2'>
                <img key={Math.random()} src={text} alt='Image could not be displayed' style={{ maxWidth: '80%' }} />
              </div>
            );
          } else {
            return (
              <p key={Math.random()}>{text}</p>
            );
          }
        })}
        <hr style={{ borderColor: 'violet' }} />
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
