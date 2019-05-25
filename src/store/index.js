import { createStore } from 'redux';
import reducer from '../reducers';

const initialState = {
  users : [
    {id: '1', username: 'Charlies3000', name: 'Charlie', last: 'Verdas'},
    {id: '2', username: 'falcon69', name: 'Verdis', last: 'Pauli'},
    {id: '3', username: 'TremorsIAm', name: 'Sheila', last: 'Yukino'},
    {id: '4', username: 'ChangoFeliz', name: 'Jahaziel', last: 'Vazquez'}
  ]
}

const store = createStore(reducer, initialState);

export default store;
