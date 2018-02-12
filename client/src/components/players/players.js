import React, { Component } from 'react';

import './players.css';

class Players extends Component {
    constructor(){
        super();
        this.state =  {
            players:[]
        }
    }

    componentDidMount(){
        fetch('/api/players')
        .then(res => res.json())
        .then(players => this.setState({players}, ()=> console.log('effectifs', players)
        ));
    }

    render() {
        return (
            <div>
                <h2>Players</h2>
                
                {this.state.players
                    .map(player => <div key={player.id}>
                                        <h3>{player.name} {player.prenom}</h3>
                                        <img src={player.image}/>
                                    </div>
                    )}
            </div>
        );
    }
}

export default Players;