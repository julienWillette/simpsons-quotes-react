import React from "react";
import axios from "axios";
import Navbar from "./components/Navbar";
import QuoteCard from "./components/QuoteCard";
import QuoteList from "./components/QuoteList";
import QuoteForm from "./components/QuoteForm";
import DisplaySimpson from "./components/DisplaySimpson";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      simpson: null,
    };
    this.getSimpson = this.getSimpson.bind(this);
  }

  componentDidMount() {
    this.getSimpson();
  }

  getSimpson() {
      // Send the request
      axios
        .get('https://thesimpsonsquoteapi.glitch.me/quotes')
        // Extract the DATA from the received response
        .then(response => response.data)
        // Use this data to update the state
        .then(data => {
          this.setState({
           simpson: data[0],
          });
      });
    }

  render() {
    return (
      <div className="App">
        <Navbar />
        <h1>Axios Api Simpson</h1>
        {this.state.simpson ? (
          <DisplaySimpson simpson={this.state.simpson} />
        ) : (
          <p>Loading</p>
        )}
        <button type="button" onClick={this.getSimpson}>Get Simpson</button>
        <br></br>
        <hr></hr>
        <br></br>
        <QuoteForm />
        <QuoteList />
      </div>
    );
  }
}

export default App;
