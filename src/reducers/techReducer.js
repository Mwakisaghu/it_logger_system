import {
  GET_TECHS,
  ADD_TECH,
  DELETE_TECHS,
  SET_LOADING,
  TECHS_ERROR,
} from '../actions/types';

const initilaState = {
  techs: null,
  loading: false,
  error: null,
};

/* eslint-disable */
export default (state = initilaState, action) => {
  switch (action.type) {
    case GET_TECHS:
      return {
        ...state,
        techs: action.payload,
        loading: false,
      };
    case ADD_TECH:
      return {
        ...state,
        techs: [...state.techs, action.payload],
        loading: false,
      };
    case TECHS_ERROR:
      console.error(action.payload);
      return {
        ...state,
        error: action.payload,
        loading: false,
      };
    case SET_LOADING:
      return {
        ...state,
        loading: true,
      };
    default:
      return state;
  }
};
