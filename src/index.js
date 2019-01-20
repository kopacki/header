import React, { Component, Fragment } from "react";
import PropTypes from "prop-types";

import styles from "./styles.css";

const packageInfo = require("../package.json");

export default class ExampleComponent extends Component {
  static propTypes = {
    text: PropTypes.string
  };

  state = {
    isParagraphVisible: true
  };

  render() {
    const { text } = this.props;
    const { isParagraphVisible } = this.state;

    return (
      <header className={styles.header}>
        Header version {packageInfo.version}
        {isParagraphVisible && (
          <Fragment>
          <p>{text}</p>
        <button onClick={this.hideParagraph}>
          Hide the paragraph above 🔝
        </button>
          </Fragment>
        )}
      </header>
    );
  }

  hideParagraph = () => {
    this.setState({ isParagraphVisible: false });
  };
}
