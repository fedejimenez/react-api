import React from "react";
import axios from "axios";
import "./JokeList.css";
import Joke from "./Joke";
import uuid from "uuid/v4";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLaugh } from "@fortawesome/free-solid-svg-icons";

class JokeList extends React.Component {
  constructor() {
    super();
    this.state = {
      jokes: JSON.parse(window.localStorage.getItem("jokes") || "[]"),
      loading: false
    };
    this.seenJokes = new Set(this.state.jokes.map(joke => joke.text));
    this.handleClick = this.handleClick.bind(this);
  }
  static defaultProps = {
    numJokesToGet: 10
  };

  componentDidMount() {
    if (this.state.jokes.length === 0) {
      this.getJokes();
    }
    this.sortJokes();
  }

  async getJokes() {
    try {
      const url = "https://icanhazdadjoke.com/";
      const headers = {
        Accept: "application/json"
      };
      let jokes = [];
      while (jokes.length < this.props.numJokesToGet) {
        let res = await axios.get(url, { headers: headers });
        let newJoke = res.data.joke;
        if (!this.seenJokes.has(newJoke)) {
          jokes.push({ id: uuid(), text: newJoke, votes: 0 });
        }
      }
      this.setState(
        st => ({
          loading: false,
          jokes: [...st.jokes, ...jokes]
        }),
        () =>
          window.localStorage.setItem("jokes", JSON.stringify(this.state.jokes))
      );
    } catch (e) {
      console.log(e);
      alert(
        "Oops! It looks like there is a problem in the network. We are working on fixing that!"
      );
      this.setState({ loading: false });
    }
    this.sortJokes();
  }

  handleVote(id, delta) {
    this.setState(
      st => ({
        jokes: st.jokes.map(joke =>
          joke.id === id ? { ...joke, votes: joke.votes + delta } : joke
        )
      }),
      () =>
        window.localStorage.setItem("jokes", JSON.stringify(this.state.jokes))
    );
  }

  handleClick() {
    this.setState({ loading: true }, this.getJokes);
  }

  sortJokes() {
    let jokes = this.state.jokes.sort((a, b) => b.votes - a.votes);
    this.setState({
      jokes: jokes
    });
  }

  render() {
    if (this.state.loading) {
      return (
        <div className="JokeList-spinner">
          <FontAwesomeIcon icon={faLaugh} size="8x" spin />
          <h1 className="JokeList-title">Loading...</h1>
        </div>
      );
    }
    // let jokes = this.state.jokes.sort((a, b) => b.votes - a.votes);
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
          <button className="JokeList-getmore" onClick={this.handleClick}>
            Fetch Jokes
          </button>
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
