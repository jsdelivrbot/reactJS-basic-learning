import React, { Component } from 'react'
import { connect } from 'react-redux';
import { carDetail, clearDetail } from '../actions';
import { bindActionCreators }  from 'redux';

class Car extends Component {

    componentDidMount() {
        {/* 接受参数 */}
        this.props.carDetail(this.props.match.params.id);
    }

    
    componentWillMount() {
        this.props.clearDetail();
    }
    

    renderDetail = ({detail}) => {
        if (detail) {
            return detail.map((item) => {
                return (
                    <div key={item.id} className="car_detail">
                        <img src={`/images/${item.image}`} alt="a"/>
                        <div className="content">
                            <h2>{item.model}</h2>
                            <h2>{item.brand}</h2>
                            <p>
                                {item.description}
                            </p>
                        </div>
                    </div>
                )
            })
        }
    }

    render() {
        return (
            <div>
                {this.renderDetail(this.props.cars)}
            </div>
        )
    }
}

function mapstateToProps(state) {
    return {
        cars: state.cars
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({carDetail}, dispatch);
}

export default connect(mapstateToProps, mapDispatchToProps)(Car)
