import React from 'react';
import T from 'prop-types';

import Divider from '@material-ui/core/Divider';

import MessageList from './MessageList';
import MessageInput from './MessageInput';

const Chatbox = ({ author }) => (
  <div
    style={{
      flex: 1,
      alignSelf: 'center',
      maxWidth: 420,
      backgroundColor: '#FFF',
      height: 500,
      display: 'flex',
      flexDirection: 'column',
      boxShadow: '0 4px 6px 0 hsla(0, 0%, 0%, 0.2)',
      borderRadius: 4,
    }}
  >
    <MessageList />
    <Divider />
    <MessageInput author={author} />
  </div>
);

Chatbox.propTypes = {
  author: T.string.isRequired,
};

export default Chatbox;
