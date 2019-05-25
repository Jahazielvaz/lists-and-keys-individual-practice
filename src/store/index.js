import { createStore } from 'redux';
import reducer from './reducers';

const initialState = {
  message: "This is my successful state"
}

const store = createStore(reducer, initialState);
