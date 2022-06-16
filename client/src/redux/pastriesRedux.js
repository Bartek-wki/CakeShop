import axios from 'axios';
import { API_URL } from '../config';

/* SELECTORS */
export const getTopPastries = ({ pastries }) => pastries.topPastries;
export const getAllPastries = ({ pastries }) => pastries.allPastries;
export const getSinglePastry = ({ pastries }) => pastries.singlePastry;

/* ACTIONS */

//action name creator
const reducerName = 'pastries';
const createActionName = name => `app/${reducerName}/${name}`;

const START_REQUEST = createActionName('START_REQUEST');
const END_REQUEST = createActionName('END_REQUEST');
const ERROR_REQUEST = createActionName('ERROR_REQUEST');

const LOAD_TOP_PASTRIES = createActionName('LOAD_TOP_PASTRIES');
const LOAD_ALL_PASTRIES = createActionName('LOAD_ALL_PASTRIES');
const LOAD_SINGLE_PASTRY = createActionName('LOAD_SINGLE_PASTRY');


export const startRequest = payload => ({ payload, type: START_REQUEST });
export const endRequest = payload => ({ payload, type: END_REQUEST });
export const errorRequest = payload => ({ payload, type: ERROR_REQUEST });

export const loadTopPastries = payload => ({ payload, type: LOAD_TOP_PASTRIES });
export const loadAllPastries = payload => ({ payload, type: LOAD_ALL_PASTRIES });
export const loadSinglePastry = payload => ({ payload, type: LOAD_SINGLE_PASTRY });

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

export const loadAllPastriesRequest = () => {
  return async dispatch => {
    dispatch(startRequest({ name: LOAD_ALL_PASTRIES }));
    try {
      let res = await axios.get(`${API_URL}/pastries`);
      dispatch(loadAllPastries(res.data));
      dispatch(endRequest({ name: LOAD_ALL_PASTRIES }));
    }
    catch (error) {
      dispatch(errorRequest({ name: LOAD_ALL_PASTRIES, error: error.message }));
    }
  };
};

export const loadSinglePastryRequest = _id => {
  return async dispatch => {
    dispatch(startRequest({ name: LOAD_SINGLE_PASTRY }));
    try {
      let res = await axios.get(`${API_URL}/pastries/${_id}`);
      dispatch(loadSinglePastry(res.data));
      dispatch(endRequest({ name: LOAD_SINGLE_PASTRY }));
    }
    catch (error) {
      dispatch(errorRequest({ name: LOAD_SINGLE_PASTRY, error: error.message }));
    }
  };
};

/* INITIAL STATE */
const initialState = {
  allPastries: [],
  topPastries: [],
  singlePastry: [],
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
    case LOAD_ALL_PASTRIES:
      return { ...statePart, allPastries: [...action.payload] };
    case LOAD_SINGLE_PASTRY:
      return { ...statePart, singlePastry: action.payload };
    default:
      return statePart;
  }
}
