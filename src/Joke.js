import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUp, faArrowDown } from "@fortawesome/free-solid-svg-icons";

class Joke extends React.Component {
  constructor() {
    super();
    this.state = {
      someKey: "someValue"
    };
  }

  render() {
    return (
      <div className="Joke">
        <div className="Joke-buttons">
          <FontAwesomeIcon icon={faArrowUp} onClick={this.props.upvote} />
          <span>{this.props.votes}</span>
          <FontAwesomeIcon icon={faArrowDown} onClick={this.props.downvote} />
        </div>
        <div className="Joke-text">{this.props.text}</div>
      </div>
    );
  }

  componentDidMount() {
    this.setState({
      someKey: "otherValue"
    });
  }
}

export default Joke;
