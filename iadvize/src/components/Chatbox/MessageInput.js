import React from 'react';
import T from 'prop-types';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux'

/* material-ui */
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import SendIcon from '@material-ui/icons/Send';


import { pushMessage } from 'src/domains/chat/actions';


const MessageInput = ({ pushMessage }) => (
  <div style={{ display: 'flex', justifyContent: 'space-evenly' }}>
    <TextField />
    <Button onClick={() => pushMessage({ author: 'al', text: 'foo' })}><SendIcon /></Button>
  </div>
)

MessageInput.propTypes = {
  /* functions */
  pushMessage: T.func.isRequired,
}

export default connect(
  null,
  dispatch => bindActionCreators({
    pushMessage,
  }, dispatch)
)(MessageInput);
