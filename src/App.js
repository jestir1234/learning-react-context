import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

const MyContext = React.createContext();

// Then create a provider Component

class MyProvider extends Component {
  state = {
    name: "Matt",
    age: 100,
    cool: true
  };

  render() {
    return (
      <MyContext.Provider
        value={{
          state: this.state,
          growAYearOlder: () =>
            this.setState({
              age: this.state.age + 1
            })
        }}
      >
        {this.props.children}
      </MyContext.Provider>
    );
  }
}

const Family = props => (
  <div className="family">
    <Person />
  </div>
);

class Person extends Component {
  render() {
    return (
      <div className="person">
        <MyContext.Consumer>
          {context => (
            <React.Fragment>
              <p>Age: {context.state.age}</p>
              <p>Name: {context.state.name}</p>
              <p>Cool: {context.state.cool}</p>
              <button onClick={context.growAYearOlder}>
                Grow a year older
              </button>
            </React.Fragment>
          )}
        </MyContext.Consumer>
      </div>
    );
  }
}

class App extends Component {
  state = {
    name: "Matt",
    age: 100,
    cool: true
  };

  render() {
    return (
      <MyProvider>
        <div className="App">
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <h1 className="App-title">CONTEXT TESTING</h1>
          </header>
          <p className="App-intro">This is the app</p>
          <Family />
        </div>
      </MyProvider>
    );
  }
}

export default App;
