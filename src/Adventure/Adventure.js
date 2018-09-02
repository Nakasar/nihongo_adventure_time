import React, { Component } from 'react'
import MainMenu from './MainMenu/MainMenu';

import GameManager from '../logic/GameManager';
import GameMenu from './GameMenu/GameMenu';
import Inventory from './Inventory/Inventory';
import Step from './Step/Step';

export default class Adventure extends Component {
  constructor(props) {
    super(props);

    this.state = {
      playing: false,
    };
  }

  startNewAdventure = () => {
    GameManager.newGame();
    this.setState({
      playing: true,
    });
  }

  continueAdventure = () => {
    GameManager.resumeGame();
    this.setState({
      playing: true,
    });
  }

  saveAdventure = () => {
    GameManager.saveGame();
    this.setState({
      saved: true,
    }, () => {
      setTimeout(() => {
        this.setState({
          saved: false,
        });
      }, 2000);
    });
  }

  quitAdventure = () => {
    this.setState({
      playing: false,
    });
  }

  execute = (actionText) => {
    GameManager.execute(actionText);
    this.forceUpdate();
  }

  render() {
    if (!this.state.playing) {
      return (
        <MainMenu
          startNewAdventure={this.startNewAdventure}
          continueAdventure={this.continueAdventure}
          hasSave={GameManager.hasSave()}
         />
      )
    }

    let currentStep;
    try {
      currentStep = GameManager.getCurrentStep();
    } catch (err) {
      return (
        <div className='container-fluid text-center' style={{ paddingTop: '40vh' }} >
          <h1>なに?!!</h1>
          <p className='text-warning'>An error occured.</p>
          <button className='btn btn-link text-danger' onClick={this.quitAdventure}>Go back to Main Menu.</button>
        </div>
      );
    }

    return (
      <div>
        <GameMenu 
          saveAdventure={this.saveAdventure}
          quitAdventure={this.quitAdventure}
          saved={this.state.saved} />
        <div className='row'>
          <div className='col-4'>
            <Inventory 
              inventory={GameManager.getInventory()}
            />
          </div>
          <div className='col-8'>
            <Step 
              step={currentStep}
              execute={this.execute}
            />
          </div>
        </div>
        <div className='border-top text-right'>
          <a href='https://mines-nancy.univ-lorraine.fr' className='btn btn-link text-info'>Ecole des Mines de Nancy</a>
        </div>
      </div>
    )
  }
}
