import { combineReducers } from 'redux';
import { createReducer } from '@reduxjs/toolkit';
import {
  newContact,
  deleteContact,
  filterContact,
} from '../contacts/contacts-actions';

const items = createReducer([], {
  [newContact]: (state, { payload }) => [...state, payload],
  [deleteContact]: (state, { payload }) =>
    state.filter(({ id }) => id !== payload),
});

const filter = createReducer('', {
  [filterContact]: (_, { payload }) => payload,
});

export default combineReducers({
  items,
  filter,
});
