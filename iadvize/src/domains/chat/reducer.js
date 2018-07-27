import {
  PUSH_MESSAGE
} from './constants';

const initialState = {
  messages: [],
}

const chat = (state = initialState, action) => {
  switch (action.type) {
    case PUSH_MESSAGE:
      return {
        ...state,
        messages: [
          ...state.messages,
          action.payload,
        ]
      }
    default:
      return state
  }
}

export default chat
