import get from 'lodash/get';

export const getMessages = state => get(state, 'chat.messages', []);
