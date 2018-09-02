import game from '../game';

class GameManager {
  constructor(data) {
    this.save = null;
    this.game = data;
    this.checkSave();
  }

  checkSave = () => {
    const saveString = localStorage.getItem('save');
    if (!saveString) {
      return;
    }

    try {
      const save = JSON.parse(saveString);

      const {
        inventory,
        position,
      } = save;

      if (inventory !== undefined && position !== undefined) {
        this.save = save;
        return;
      }
    } catch (err) {
      return;
    }
  }

  hasSave = () => {
    return this.save !== null;
  }

  newGame = () => {
    this.save = {
      inventory: [{ name: 'Chocolate Bar' }],
      position: 0,
    };
  }

  resumeGame = () => {
    return;
  }

  saveGame = () => {
    localStorage.setItem('save', JSON.stringify(this.save));
  }

  getInventory = () => {
    if (!this.save) {
      return [];
    }
    return this.save.inventory;
  }

  getCurrentStep = () => {
    if (!this.save) {
      throw new Error('Game is not started.');
    }
    const position = this.save.position;

    const step = Object.assign({}, this.game.steps[position]);

    step.actions = step.actions.map(action => {
      action.possible = this.isActionPossible(action);
      return action;
    })

    return step;
  }

  isActionPossible = (action) => {
    if (action.conditions) {
      for (let condition of action.conditions) {
        switch (condition.id) {
          case 'has_item':
            if (!this.save.inventory.find(item => item.name === condition.item)) {
              return false;
            }
            break;
          default:
            break;
        }
      }
    }

    return true;
  }

  execute = (actionText) => {
    const step = this.getCurrentStep();

    const action = step.actions.find(action => action.text === actionText);
    if (!action) {
      throw new Error('Action does not exist.');
    }

    if (!action.possible) {
      throw new Error('Action is not possible.');
    }

    if (!action.effects) {
      throw new Error('Action has no effects.');
    }

    for (let effect of action.effects) {
      switch (effect.id) {
        case 'use_item':
          const itemIndex = this.save.inventory.findIndex(item => item.name === effect.item);
          this.save.inventory.splice(itemIndex, 1);
          break;
        case 'go_to':
          this.save.position = effect.step;
          break;
        case 'quit':
          this.save.position = 0;
          break;
        default:
          throw new Error('Unkown effect.');
      }
    }
  }
}

export default new GameManager(game);