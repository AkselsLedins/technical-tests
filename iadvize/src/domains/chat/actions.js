import uuidv4 from 'uuid/v4';

import { PUSH_MESSAGE } from './constants';

export const pushMessage = ({ author, text }) => ({
  type: PUSH_MESSAGE,
  payload: {
    id: uuidv4(),
    author,
    text,
    createdAt: new Date(),
  },
});
