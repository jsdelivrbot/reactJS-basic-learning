import React, { Component } from 'react';
import axios from 'axios';
import { Appbar, Container, Button } from 'muicss/react';
import Tasks from './Components/Tasks';
import AddTask from './Components/AddTask';
import './App.css';

class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
      tasks: []
    }
  }

  componentWillMount() {
    this.getTasks();
  }

  getTasks() {
    axios.request({
      method: 'get',
      url: 'https://api.mlab.com/api/1/databases/react-task/collections/tasks?apiKey=3m5b6W7TnL8XFABZIbMDgUOAnlqsG9rh'
    }).then((response) => {
      this.setState({ tasks: response.data }, () => {
        console.log(this.state);
      });
    }).catch((error) => {
      console.log(error);
    });
  }

  editState(task, checked) {
    console.log(task);
    axios.request({
      method: 'put',
      url: 'https://api.mlab.com/api/1/databases/react-task/collections/tasks/' + task._id.$oid + '/?apiKey=3m5b6W7TnL8XFABZIbMDgUOAnlqsG9rh',
      data: task.text,
      completed: checked
    }).then((response) => {
      this.setState({ tasks: response.data }, () => {
        let tasks = this.state.tasks;
        for (let i = 0; i < tasks.length; i++) {
          if (tasks[i]._id.$oid === response.data._id.$oid) {
            tasks[i].completed = checked;
          }
        }
        this.setState({
          tasks
        })
      });
    }).catch((error) => {
      console.log(error);
    });
  }

  addTask(text) {
    axios.request({
      method: 'post',
      url: 'https://api.mlab.com/api/1/databases/react-task/collections/tasks?apiKey=3m5b6W7TnL8XFABZIbMDgUOAnlqsG9rh',
      data: {
        text: text,
        completed: false
      },
      completed: checked
    }).then((response) => {
      this.setState({ tasks: response.data }, () => {
        let tasks = this.state.tasks;
        tasks.push({
          _id: response.data._id,
          text,
          completed: false
        })
        this.setState({
          tasks
        })
      });
    }).catch((error) => {
      console.log(error);
    });
  }

  clearTasks() {
    let tasks = this.state.tasks;

    let i = tasks.length;

    while(i--) {
      if(tasks[i].completed === true) {
        let id = tasks[i]._id.$oid;
        tasks.splice(i, i);
        axios.request({
          method: 'delete',
          url: 'https://api.mlab.com/api/1/databases/react-task/collections/tasks/' + id + '/?apiKey=3m5b6W7TnL8XFABZIbMDgUOAnlqsG9rh',
        })
        .then(response => {

        })
        .catch(error => {
          
        })
      }
    }
  }

  render() {
    return (
      <div className="App">
        <Appbar>
          <Container>
            <table width="100%">
              <tbody>
                <tr>
                  <td className="mui--appbar-height"><h3>ReactTasks</h3></td>
                </tr>
              </tbody>
            </table>
          </Container>
        </Appbar>
        <br />
        <Container>
          <AddTask onAddTask={this.addTask.bind(this)} />
          <Tasks tasks={this.state.tasks} onEditState={this.editState.bind(this)} />
          <Button color="danger" onClick={this.clearTasks.bind(this)}> </Button>
        </Container>
      </div>
    );
  }
}

export default App;
