import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUp, faArrowDown } from "@fortawesome/free-solid-svg-icons";
import "./Joke.css";

class Joke extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      copySuccess: false
    };
  }
  getColor() {
    let votes = this.props.votes;
    if (votes >= 15) {
      return "#4CAF50";
    } else if (votes >= 12) {
      return "#8BC34A";
    } else if (votes >= 9) {
      return "#CDDC39";
    } else if (votes >= 6) {
      return "#FFEB3B";
    } else if (votes >= 3) {
      return "#FFC107";
    } else if (votes >= 0) {
      return "#FF9800";
    } else {
      return "#F44336";
    }
  }

  getEmoji() {
    let votes = this.props.votes;
    if (votes >= 15) {
      return "em em-rolling_on_the_floor_laughing";
    } else if (votes >= 12) {
      return "em em-laughing";
    } else if (votes >= 9) {
      return "em em-smiley";
    } else if (votes >= 6) {
      return "em em-slightly_smiling_face";
    } else if (votes >= 3) {
      return "em em-neutral_face";
    } else if (votes >= 0) {
      return "em em-confused";
    } else {
      return "em em-angry";
    }
  }

  copyTextToClipboard = () => {
    const el = this.textDiv;
    var range = document.createRange();
    range.selectNode(el);
    window.getSelection().removeAllRanges(); // clear current selection
    window.getSelection().addRange(range); // to select text
    document.execCommand("copy");
    window.getSelection().removeAllRanges(); // to deselect
    this.setState({ copySuccess: true });

    let message = this.copyMessage;
    message.innerHTML = "Copied!";
    setInterval(function() {
      message.innerHTML = "Click to Copy";
    }, 2000);
  };

  render() {
    return (
      <div className="Joke">
        <div className="Joke-buttons">
          <FontAwesomeIcon
            className="fa-arrow-up"
            icon={faArrowUp}
            onClick={this.props.upvote}
          />
          <span className="Joke-votes" style={{ borderColor: this.getColor() }}>
            {this.props.votes}
          </span>
          <FontAwesomeIcon
            className="fa-arrow-down"
            icon={faArrowDown}
            onClick={this.props.downvote}
          />
        </div>
        <div
          className="Joke-text tooltip"
          ref={textdiv => (this.textDiv = textdiv)}
          onClick={() => this.copyTextToClipboard()}
        >
          {this.props.text}
          <span
            className="tooltiptext"
            ref={message => (this.copyMessage = message)}
          >
            Click to Copy
          </span>
        </div>
        <div className="Joke-smiley">
          <i
            className={this.getEmoji()}
            aria-label="ROLLING ON THE FLOOR LAUGHING"
          ></i>
        </div>
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
