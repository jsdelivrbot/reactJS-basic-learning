import React, { Component } from 'react';
import { Checkbox } from 'muicss/react';

class TaskItem extends Component {

    constructor(props) {
        super(props);

        this.state = {
            tasks: props.task
        }
    }

    onChange(task, event) {
        this.props.onEditState(task, event.target.checked);
    }


    render() {
        return (
            <div className="mui--divider-bottom">
                <Checkbox className={(this.state.task.completed) ? 'completed' : ''} name={} label={this.state.task.text} 
                defaultChecked={this.state.tasks.completed}
                onChange={this.onChange.bind(this), this.state.task}/>
            </div>
        );
    }
}

export default TaskItem;
