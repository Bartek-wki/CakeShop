import axios from 'axios';
import { API_URL } from '../config';

/* SELECTORS */
export const getTopPastries = ({ pastries }) => pastries.topPastries;

/* ACTIONS */

//action name creator
const reducerName = 'pastries';
const createActionName = name => `app/${reducerName}/${name}`;

const START_REQUEST = createActionName('START_REQUEST');
const END_REQUEST = createActionName('END_REQUEST');
const ERROR_REQUEST = createActionName('ERROR_REQUEST');

const LOAD_TOP_PASTRIES = createActionName('LOAD_TOP_PASTRIES');

export const startRequest = payload => ({ payload, type: START_REQUEST });
export const endRequest = payload => ({ payload, type: END_REQUEST });
export const errorRequest = payload => ({ payload, type: ERROR_REQUEST });

export const loadTopPastries = payload => ({ payload, type: LOAD_TOP_PASTRIES });

/* THUNKS */
export const loadTopPastriesRequest = () => {
  return async dispatch => {
    dispatch(startRequest({ name: LOAD_TOP_PASTRIES }));
    try {
      let res = await axios.get(`${API_URL}/pastries/top`);
      dispatch(loadTopPastries(res.data));
      dispatch(endRequest({ name: LOAD_TOP_PASTRIES }));
    }
    catch (error) {
      dispatch(errorRequest({ name: LOAD_TOP_PASTRIES, error: error.message }));
    }
  };
};

/* INITIAL STATE */
const initialState = {
  allPastries: [],
  topPastries: [],
  singlePastries: [],
  requests: [],
};

/* REDUCER */
export default function reducer(statePart = initialState, action = {}) {
  switch (action.type) {
    case START_REQUEST:
      return { ...statePart, requests: { ...statePart.requests, [action.payload.name]: { pending: true, error: null, success: false } } };
    case END_REQUEST:
      return { ...statePart, requests: { ...statePart.requests, [action.payload.name]: { pending: false, error: null, success: true } } };
    case ERROR_REQUEST:
      return { ...statePart, requests: { ...statePart.requests, [action.payload.name]: { pending: false, error: action.payload.error, success: false }} };
    case LOAD_TOP_PASTRIES:
      return { ...statePart, topPastries: [...action.payload] };
    default:
      return statePart;
  }
}
