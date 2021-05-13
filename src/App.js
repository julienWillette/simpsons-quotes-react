import React from "react";
import axios from "axios";
import Navbar from "./components/Navbar";
import QuoteCard from "./components/QuoteCard";
import QuoteList from "./components/QuoteList";
import QuoteForm from "./components/QuoteForm";
import DisplaySimpson from "./components/DisplaySimpson";

const sampleSimpson = {
  quote:
    "Facts are meaningless. You could use facts to prove anything that's even remotely true.",
  character: "Homer Simpson",
  image:
    "https://cdn.glitch.com/3c3ffadc-3406-4440-bb95-d40ec8fcde72%2FHomerSimpson.png?1497567511939"
};

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      simpson: sampleSimpson,
    };
    this.getSimpson = this.getSimpson.bind(this);
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
        <DisplaySimpson simpson={this.state.simpson} />
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
