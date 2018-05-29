import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      list: [
        {
          title: "React",
          author: "Jordan walke",
          num_comments: 3,
          points: 4,
          objectId: 0
        },
        {
          title: "Redux",
          author: "Dan Abramov",
          num_comments: 2,
          points: 5,
          objectId: 1
        }
      ]
    };

    this.onDismiss = this.onDismiss.bind(this);

  }

  componentWillReceiveProps() {
    console.log("componentWillReceiveProps");
  }
  shouldComponentUpdate() {
    console.log("shouldComponentUpdate");
  }

  componentWillUpdate() {
    console.log("componentWillUpdate");
  }

  componentDidUpdate() {
    console.log("componentDidUpdate");
  }
  componentWillMount() {
    console.log("componentWillMount");
  }
  componentDidMount() {
    console.log("componentDidMount");
  }

  componentWillUnmount() {
    console.log("componentWillUnmount");
  }

  componentDidCatch() {
    console.log("componentDidCatch");
  }

  onDismiss(id) {
    alert(id);
  }

  render() {
    const message = "Welcome to the Road to learn React16!";
    return (
      <div className="App">
        { this.state.list.map((book) => 
          <div>
            <span>{book.title} </span>
            <span>{book.author} </span>
            <span>{book.points} </span>
            <span>
              <button type="button" onClick={() => this.onDismiss(book.objectId)}>
                Dismiss
              </button>
            </span>
          </div>
        )}
      </div>
    );
  }
}

export default App;
