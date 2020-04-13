import React from "react";
import axios from "axios";

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
        <h1>Dad Jokes</h1>
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
