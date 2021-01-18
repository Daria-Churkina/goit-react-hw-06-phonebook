import { v4 as uuidv4 } from 'uuid';
import { createAction } from '@reduxjs/toolkit';
import { NEW_CONTACT, DELETE_CONTACT, FILTER_CONTACT } from './contacts-types';

export const newContact = createAction(NEW_CONTACT, (name, number) => ({
  payload: {
    id: uuidv4(),
    name,
    number,
  },
}));

export const deleteContact = createAction(DELETE_CONTACT);
export const filterContact = createAction(FILTER_CONTACT);
