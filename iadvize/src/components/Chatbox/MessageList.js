import React from 'react';
import T from 'prop-types';

import { connect } from 'react-redux';
import moment from 'moment';

/* material-ui */
import Avatar from '@material-ui/core/Avatar';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';

import { getMessages } from 'src/domains/chat/selectors';

const Message = ({ id, author, text, createdAt }) => (
  <ListItem key={id}>
    <Avatar alt={`${author} picture`} src={`https://api.adorable.io/avatars/50/${author}`} />
    <ListItemText primary={text} secondary={author} />
    {moment(createdAt).format('HH:mm')}
  </ListItem>
);

const MessageList = ({ messages }) => (
  <div style={{ flex: '1 1', overflowY: 'scroll' }}>
    <List style={{ minHeight: '500px !important' }}>{messages.map(Message)}</List>
  </div>
);

MessageList.propTypes = {
  /* data */
  messages: T.array.isRequired,
};

export default connect(
  state => ({
    messages: getMessages(state),
  }),
  null,
)(MessageList);
