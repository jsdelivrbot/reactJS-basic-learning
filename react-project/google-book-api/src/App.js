import React, { Component } from 'react';
import './App.css';
import Header from './Components/Header';
import { Grid, Col, Row } from 'react-bootstrap';
import Book from './Components/Book';
import axios from 'axios';
import SearchInput from './Components/SearchInput';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      books: [],
      text: 'Harry Potter'
    }
  }

  componentWillMount() {
    this.getBooks();
  }

  getBooks() {
    axios.request({
      method: 'get',
      url: 'https://www.googleapis.com/books/v1/volumes?q=' + this.state.text
    }).then((response) => {
      this.setState({ books: response.data.items }, () => {
        console.log(this.state);
      });
    }).catch((error) => {
      console.log(error);
    });
  }

  handleChange(text) {
    this.setState({
      text
    }, this.getBooks);
  }

  render() {
    return (
      <div className="App">
        <Header />
        <Grid>
          <Row>
            <Col xs={12} md={12} lg={12} >
              <SearchInput vlaue={this.state.text} onChange={this.handleChange.bind(this)}/>
              <Book books={this.state.books} />
            </Col>
          </Row>
        </Grid>
      </div>
    );
  }
}

export default App;
