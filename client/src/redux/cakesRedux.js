import axios from 'axios';
import { API_URL } from '../config';
import initialState from './cakesInitialState';

/* SELECTORS */
export const getTopCakes = ({ cakes }) => cakes.topCakes;
export const getAllCakes = ({ cakes }) => cakes.allCakes;
export const getSingleCake = ({ cakes }) => cakes.singleCake;
export const getCakesSizeDescription = ({ cakes }) => cakes.sizeDescription;
export const getCakesTastesToChoose = ({ cakes }) => cakes.tastesToChoose;

/* ACTIONS */

//action name creator
const reducerName = 'cakes';
const createActionName = name => `app/${reducerName}/${name}`;

const START_REQUEST = createActionName('START_REQUEST');
const END_REQUEST = createActionName('END_REQUEST');
const ERROR_REQUEST = createActionName('ERROR_REQUEST');

const LOAD_TOP_CAKES = createActionName('LOAD_TOP_CAKES');
const LOAD_ALL_CAKES = createActionName('LOAD_ALL_CAKES');
const LOAD_SINGLE_CAKE = createActionName('LOAD_SINGLE_CAKE');

export const startRequest = payload => ({ payload, type: START_REQUEST });
export const endRequest = payload => ({ payload, type: END_REQUEST });
export const errorRequest = payload => ({ payload, type: ERROR_REQUEST });

export const loadTopCakes = payload => ({ payload, type: LOAD_TOP_CAKES });
export const loadAllCakes = payload => ({ payload, type: LOAD_ALL_CAKES });
export const loadSingleCake = payload => ({ payload, type: LOAD_SINGLE_CAKE });

/* THUNKS */
export const loadTopCakesRequest = () => {
  return async dispatch => {
    dispatch(startRequest({ name: LOAD_TOP_CAKES }));
    try {
      let res = await axios.get(`${API_URL}/cakes/top`);
      dispatch(loadTopCakes(res.data));
      dispatch(endRequest({ name: LOAD_TOP_CAKES }));
    }
    catch (error) {
      dispatch(errorRequest({ name: LOAD_TOP_CAKES, error: error.message }));
    }
  };
};

export const loadAllCakesRequest = () => {
  return async dispatch => {
    dispatch(startRequest({ name: LOAD_ALL_CAKES }));
    try {
      let res = await axios.get(`${API_URL}/cakes`);
      dispatch(loadAllCakes(res.data));
      dispatch(endRequest({ name: LOAD_ALL_CAKES }));
    }
    catch (error) {
      dispatch(errorRequest({ name: LOAD_ALL_CAKES, error: error.message }));
    }
  };
};

export const loadSingleCakeRequest = _id => {
  return async dispatch => {
    dispatch(startRequest({ name: LOAD_SINGLE_CAKE }));
    try {
      let res = await axios.get(`${API_URL}/cakes/${_id}`);
      dispatch(loadSingleCake(res.data));
      dispatch(endRequest({ name: LOAD_SINGLE_CAKE }));
    }
    catch (error) {
      dispatch(errorRequest({ name: LOAD_SINGLE_CAKE, error: error.message }));
    }
  };
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
    case LOAD_TOP_CAKES:
      return { ...statePart, topCakes: [...action.payload] };
    case LOAD_ALL_CAKES:
      return { ...statePart, allCakes: [...action.payload] };
    case LOAD_SINGLE_CAKE:
      return { ...statePart, singleCake: action.payload };
    default:
      return statePart;
  }
}
