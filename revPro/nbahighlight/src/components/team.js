import React, { Component } from 'react';

const URL_TEAM = 'http://localhost:3004/teams'

export default class Team extends Component {
    constructor(props) {
        super(props)

        this.state = {
            data: []
        }
    }

    componentDidMount() {
        fetch(`${URL_TEAM}?name=${this.props.match.params.id}`, {
            method: 'GET'
        })
            .then(response => response.json())
            .then(json => {
                this.setState({ data: json })
            })
    }

    renderSquad = (squad) => {
        return squad.map((item) => {
            return (
                <div key={item.id} className="item player_wrapper" >
                    <img src={`/images/avatar.png`} alt={item.name} />
                    <h4>{item.name}</h4>
                    <div className="node">
                        <span>{item.number}</span>
                    </div>
                    <div className="node">
                        PPG<span>{item.PPG}</span>
                    </div>
                    <div className="node">
                        APG<span>{item.APG}</span>
                    </div>
                    <div className="node">
                        RPG<span>{item.RPG}</span>
                    </div>
                </div>
            )
        })
    }

    renderData = ({ data }) => {
        return data.map((item) => {
            return (
                <div key={item.id} className="team_data_wrapper" >
                    <div className="left">
                        <img src={`/images/teams/${item.logo}`} alt={item.name} />
                    </div>

                    <div className="right">
                        <h1>{item.name}</h1>
                        <p>{item.description}</p>
                        <hr />
                        <div className="squad">
                            {this.renderSquad(item.squad)}
                        </div>
                    </div>
                </div>
            )
        })
    }


    render() {
        return (
            <div className="team_data">
                {this.renderData(this.state)}
            </div>
        );
    }
}
