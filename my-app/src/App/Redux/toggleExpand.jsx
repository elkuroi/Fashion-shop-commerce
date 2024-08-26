import { TOGGLE_EXPAND } from './actions';

const initialState = {
  isExpanded: false,
};

export const toggleReducer = (state = initialState, action) => {
  switch (action.type) {
    case TOGGLE_EXPAND:
      return {
        ...state,
        isExpanded: !state.isExpanded,
      };
    default:
      return state;
  }
};