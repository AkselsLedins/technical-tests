import React from 'react';

import Divider from '@material-ui/core/Divider';

import MessageList from './MessageList';
import MessageInput from './MessageInput';

const Chatbox = () => (
  <div style={{ flex: 1, alignSelf: 'center', maxWidth: 420, backgroundColor: '#FFF', height: 500, display: 'flex', flexDirection: 'column' }}>
    <MessageList />
    <Divider />
    <MessageInput />
  </div>
)

Chatbox.propTypes = {}

export default Chatbox;
