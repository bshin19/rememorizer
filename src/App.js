import React, { Component } from "react";
import Lodash from "lodash";
import Card from "./components/Card";
import Wrapper from "./components/Wrapper";
import cards from "./friends.json";
import Navbar from "./components/Navbar";
import "./App.css";

const shuffleArray = cards => {
  const cardsShuffle = Lodash.shuffle(cards);
  return cardsShuffle;
};

class App extends Component {
  // Setting this.state.friends to the friends json array
  state = {
    cards: cards,
    clicked: [],
    score: 0,
    highScore: 0,
    status: ""
  };

  handleClick = id => {
    if (!this.state.clicked.includes(id)) {
      this.handleIncrement();
      this.setState({ clicked: this.state.clicked.concat(id) });
    } else {
      this.initiateReset();
    };
  };

  handleIncrement() {
    this.setState({ score: this.state.score + 1, status: "Nice!" });

    if (this.state.score + 1 > this.state.highScore) {
      this.setState({ highScore: this.state.score + 1, status: "New High Score!!" });
    };

    this.initiateShuffle();
  };

  initiateReset() {
    this.initiateShuffle();
    this.setState({
      score: 0,
      highScore: this.state.highScore,
      status: "Try Again!",
      clicked: []
    })
  };

  initiateShuffle() {
    this.setState({ cards: shuffleArray(cards) });
  };

  // Map over this.state.friends and render a card component for each card object
  render() {
    return (
      <div>
        <Navbar
          score={this.state.score}
          status={this.state.status}
          highScore={this.state.highScore}>
        </Navbar>
        <Wrapper>
          {this.state.cards.map(friend => (
            <Card
              id={friend.id}
              key={friend.id}
              image={friend.image}
              handleClick={this.handleClick}
              handleIncrement={this.handleIncrement}
              initiateReset={this.initiateReset}
              initiateShuffle={this.initiateShuffle}
            />
          ))}
        </Wrapper>
      </div>
    );
  }
}

export default App;
