import React from 'react';
import Game from './Game.js';
import './index.css';

class GameSelector extends React.Component {
    constructor(props) {
        super(props);
        
    }

    selectGameStyle(humanPlayerCount) {
        this.Game.humanPlayerCount = humanPlayerCount;
    }

    render() {
        return(
        <div>
            <div class="selector-container">
                <button className="game-selector" onClick={this.selectGameStyle(1)}>Single Player</button>
            
                <button className="game-selector" onClick={this.selectGameStyle(2)}>Multiple Player</button>
            </div>
            
            <Game />
        </div>
        );
    }
}

export default GameSelector;