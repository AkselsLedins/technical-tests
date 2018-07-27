import React from 'react';
import T from 'prop-types';

import { connect } from 'react-redux';
import moment from 'moment';

/* material-ui */
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';

import { getMessages } from 'src/domains/chat/selectors';

const Message = ({ id, text, createdAt }) => (
  <ListItem key={id}>
    <ListItemText>{text}</ListItemText>
    <ListItemText>{moment(createdAt).format('HH:mm')}</ListItemText>
  </ListItem>
)

const MessageList = ({ messages }) => (
  <div style={{ flex: '1 1', overflowY: 'scroll' }}>
    <List style={{ minHeight: '500px !important', overflowY: 'scroll' }}>
      {messages.map(Message)}
    </List>
  </div>
)

MessageList.propTypes = {
  /* data */
  messages: T.array.isRequired,
}

export default connect(
  state => ({
    messages: getMessages(state),
  }),
  null,
)(MessageList);
