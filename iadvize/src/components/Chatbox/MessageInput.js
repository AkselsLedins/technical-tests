import React, { Component } from 'react';
import T from 'prop-types';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

/* material-ui */
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import SendIcon from '@material-ui/icons/Send';

import { pushMessage } from 'src/domains/chat/actions';

class MessageInput extends Component {
  state = {
    text: '',
  };

  onTextChange = e => {
    this.setState({ text: e.target.value });
  };

  onPushMessange = () => {
    const { text } = this.state;
    const { author } = this.props;

    this.props.pushMessage({ author, text });
    this.setState({ text: '' });
  };

  render() {
    const { text } = this.state;

    return (
      <div style={{ display: 'flex', justifyContent: 'space-between', padding: '.2rem 1rem' }}>
        <TextField
          value={text}
          onChange={this.onTextChange}
          style={{ flex: 1, paddingRight: '1rem' }}
          multiline
        />
        <Button onClick={this.onPushMessange} disabled={!text}>
          <SendIcon />
        </Button>
      </div>
    );
  }
}

MessageInput.propTypes = {
  /* functions */
  pushMessage: T.func.isRequired,

  /* data */
  author: T.string.isRequired,
};

export default connect(
  null,
  dispatch =>
    bindActionCreators(
      {
        pushMessage,
      },
      dispatch,
    ),
)(MessageInput);
