import React, { Component } from 'react';
import Course from './Course';

export default class Coursesales extends Component {

    constructor(props) {
        super(props);

        this.state = {
            total: 0
        };

        this.sumPrice = this.sumPrice.bind(this);
    }

    sumPrice(price) {
        this.setState({
            total: this.state.total + price
        })
    }

    render() {
        console.log(this.props.items);
        var courses = this.props.items.map((item, i) => {
            return <Course name={item.name} price={item.price} key={i} sumPrice={this.sumPrice} active={item.active}
            />
        });

        return (
            <div>
                <h1>Courses list</h1>
                <div id="courses">
                    {courses}
                    <p className={this.state.active ? 'active' : ''} id="total">
                        Total
                        <b> {this.state.total}</b>
                    </p>
                </div>
            </div>
        );
    }
}
