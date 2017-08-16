import React, { Component } from 'react';
import axios from 'axios';
import Output from './Output';
import Select from './Controls/select';
import Text from './Controls/text';

class App extends Component {

    constructor(props) {
        super(props);

        this.state = {
            paras: 4,
            html: true,
            text: ''
        }
    }

    getText() {
        axios.get('http://hipsterjesus.com/api?paras=' + this.state.paras + '&html=' + this.state.html)
            .then((response) => {
                this.setState({
                    text: response.data.text
                }, function () {
                    console.log(this.state);
                });
            })
            .catch(err => {
                console.log(err);
            });

    }

    changeParas(number) {
        console.log(number);
        this.setState({
            paras: number
        }, this.getText)
    }

    showHtml(x){
        this.setState({
            html: x
        }, this.getText);
    }

    render() {
        return (
            <div className="container">
                <Output value={this.state.text} />
                <h3>Options</h3>
                <form>
                    <div>
                        <label>Para</label>
                        <Text value={this.state.paras} onChange={this.changeParas.bind(this)} />
                    </div>
                    <div>
                        <label>Include Html</label>
                        <Select value={this.state.paras}
                        onChange={this.showHtml.bind(this)}
                        />
                    </div>
                </form>
            </div>
        );
    }
}

export default App;
