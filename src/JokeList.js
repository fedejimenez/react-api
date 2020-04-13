import React from "react";
import axios from "axios";
import "./JokeList.css";
import Joke from "./Joke";
import uuid from "uuid/v4";

class JokeList extends React.Component {
  constructor() {
    super();
    this.state = {
      jokes: []
    };
  }
  static defaultProps = {
    numJokesToGet: 10
  };

  async componentDidMount() {
    const url = "https://icanhazdadjoke.com/";
    const headers = {
      Accept: "application/json"
    };
    let jokes = [];
    while (jokes.length < this.props.numJokesToGet) {
      let res = await axios.get(url, { headers: headers });
      jokes.push({ id: uuid(), text: res.data.joke, votes: 0 });
    }
    this.setState({ jokes: jokes });
  }

  handleVote(id, delta) {
    this.setState(st => ({
      jokes: st.jokes.map(joke =>
        joke.id === id ? { ...joke, votes: joke.votes + delta } : joke
      )
    }));
  }

  render() {
    return (
      <div className="JokeList">
        <div className="JokeList-sidebar">
          <h1 className="JokeList-title">
            <span>Dad</span> Jokes
          </h1>
          <img
            src="https://assets.dryicons.com/uploads/icon/svg/8927/0eb14c71-38f2-433a-bfc8-23d9c99b3647.svg"
            alt="emoji-laugh"
          />
          <button className="JokeList-get-more">New Jokes</button>
        </div>
        <div className="JokeList-jokes">
          {this.state.jokes.map(joke => (
            <Joke
              votes={joke.votes}
              text={joke.text}
              key={joke.id}
              upvote={() => this.handleVote(joke.id, 1)}
              downvote={() => this.handleVote(joke.id, -1)}
            />
          ))}
        </div>
      </div>
    );
  }
}

export default JokeList;
