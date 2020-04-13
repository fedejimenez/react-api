import React from "react";
import axios from "axios";
import "./JokeList.css";

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
      jokes.push(res.data.joke);
    }
    this.setState({ jokes: jokes });
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
            <div>{joke}</div>
          ))}
        </div>
      </div>
    );
  }
}

export default JokeList;
