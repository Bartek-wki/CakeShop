import axios from 'axios';
import { API_URL } from '../config';
import shortid from 'shortid';

/* SELECTORS */
export const getCart = ({ orders }) => orders.cart;
export const getOrdersData = ({ orders }) => orders.orders;
export const getOrderId = ({ orders }) => orders.orderId;

/* ACTIONS */

//action name creator
const reducerName = 'orders';
const createActionName = name => `app/${reducerName}/${name}`;

const START_REQUEST = createActionName('START_REQUEST');
const END_REQUEST = createActionName('END_REQUEST');
const ERROR_REQUEST = createActionName('ERROR_REQUEST');

const ADD_PRODUCT_TO_CART = createActionName('ADD_PRODUCT_TO_CART');
const EDIT_PRODUCT_QUANTITY = createActionName('EDIT_PRODUCT_QUANTITY');
const REMOVE_PRODUCT_FROM_CART = createActionName('REMOVE_PRODUCT_FROM_CART');
const ADD_PRODUCTS_TO_ORDER = createActionName('ADD_PRODUCTS_TO_ORDER');
const ADD_ID_TO_REQUEST = createActionName('ADD_ID_TO_REQUEST');

export const startRequest = payload => ({ payload, type: START_REQUEST });
export const endRequest = payload => ({ payload, type: END_REQUEST });
export const errorRequest = payload => ({ payload, type: ERROR_REQUEST });

export const addProductToCart = payload => ({ payload, type: ADD_PRODUCT_TO_CART });
export const editProductQuantity = payload => ({ payload, type: EDIT_PRODUCT_QUANTITY });
export const removeProductFromCart = payload => ({ payload, type: REMOVE_PRODUCT_FROM_CART });
export const addProductsToOrder = payload => ({ payload, type: ADD_PRODUCTS_TO_ORDER });
export const addIdToRequest = payload => ({ payload, type: ADD_ID_TO_REQUEST });

/* THUNKS */
export const sendOrderRequest = (order) => {
  return async dispatch => {
    dispatch(startRequest({ name: 'SEND_ORDER' }));
    try {
      let res = await axios.post(`${API_URL}/orders`, order);
      dispatch(addIdToRequest(res.data.id));
      dispatch(endRequest({ name: 'SEND_ORDER' }));
    } catch (error) {
      dispatch(errorRequest({ name: 'SEND_ORDER', error: error.message }));
    }
  };
};

/* INITIAL STATE */
const initialState = {
  cart: [],
  orders: [],
  orderId: '',
};

/* REDUCER */
export default function reducer(statePart = initialState, action = {}) {
  switch (action.type) {
    case START_REQUEST:
      return { ...statePart, requests: { ...statePart.requests, [action.payload.name]: { pending: true, error: null, success: false } } };
    case END_REQUEST:
      return { ...statePart, requests: { ...statePart.requests, [action.payload.name]: { pending: false, error: null, success: true } } };
    case ERROR_REQUEST:
      return { ...statePart, requests: { ...statePart.requests, [action.payload.name]: { pending: false, error: action.payload.error, success: false } } };
    case ADD_PRODUCT_TO_CART:
      return { ...statePart, cart: [...statePart.cart, {...action.payload, id: shortid()}] };
    case EDIT_PRODUCT_QUANTITY:
      return { ...statePart, cart: statePart.cart.map(product => product.id === action.payload.id ? { ...product, quantity: action.payload.quantity, totalPrice: (product.price * action.payload.quantity)} : product) };
    case REMOVE_PRODUCT_FROM_CART:
      return { ...statePart, cart: statePart.cart.filter(product => product.id !== action.payload) };
    case ADD_PRODUCTS_TO_ORDER:
      return { ...statePart, orders: [...action.payload] };
    case ADD_ID_TO_REQUEST:
      return { ...statePart, orderId: action.payload };
    default:
      return statePart;
  }
}
