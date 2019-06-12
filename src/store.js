import redux, { combineReducers, createStore } from 'redux';

const ADD_USER = 'ADD_USER'
const ADD_TO_CART = 'ADD_TO_CART'
const REMOVE_FROM_CART = 'REMOVE_FROM_CART'

export function addToCart(product) {
  return { type: ADD_TO_CART, payload: { product } }
}

export function removeFromCart(product) {
  return { type: REMOVE_FROM_CART, paload: { product } }
}


function users(state = [], action) {
  switch(action) {
    case ADD_USER:
      const { nombre } = action.payload
      return [...state.users, nombre ]
    default: 
      return state
  }
}

function cart(state = [], action) {
  switch(action) {
    case ADD_TO_CART:
      const { product } = action.payload
      return [...state, product ]
    case REMOVE_FROM_CART:
      const { id } = action.payload.product
      return [...state].filter(product => product.id !== id)
    default:
      return state
  }
}

const StoreApp = combineReducers({
  users,
  cart
})

export default createStore(StoreApp); 