import React, { Component } from 'react';

const URL_HOME = 'http://localhost:3004/teams';

export default class Poll extends Component {

    constructor(props) {
        super(props)

        this.state = {
            pollTeams: []
        }
    }

    fetchPoll() {
        fetch(`${URL_HOME}?poll=true&_sort=count&_order=desc`, {
            method: 'GET'
        })
            .then(response => response.json())
            .then(json => {
                console.log(json);
                this.setState({
                    pollTeams: json
                })
            })
    }

    componentDidMount() {
        this.fetchPoll();
    }

    addCount(count, id) {
        fetch(`${URL_HOME}/${id}`, {
            method: 'PATCH',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ count: count + 1 })
        })
        .then(() => {
            this.fetchPoll();
        })
    }

    renderPoll() {

        const position = ['1st', '2nd', '3rd'];

        return this.state.pollTeams.map((item, index) => {
            console.log(item);
            return (
                <div key={item.id} className="poll_item" onClick={() => {
                    return this.addCount(item.count, item.id)
                }}>
                    <img src={` /images/teams/${item.logo}`} alt={item.name} />
                    <h4>{position[index]}</h4>
                    <div>{item.count} Votes</div>
                </div>
            )
        })
    }

    render() {
        return (
            <div className="home_poll" >
                <h3>Who won the champions ?</h3>
                <div className="poll_container">
                    {this.renderPoll()}
                </div>
            </div>
        );
    }
}
