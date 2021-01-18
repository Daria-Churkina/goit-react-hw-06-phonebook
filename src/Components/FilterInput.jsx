import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { filterContact } from '../Redux/contacts/contacts-actions';
import { getFilter, getContacts } from '../Redux/contacts/contacts-selectors';

function FilterInput() {
  const dispatch = useDispatch();
  const filter = useSelector(getFilter);
  const contacts = useSelector(getContacts);

  const filterInput = e => {
    dispatch(filterContact(e.target.value));
  };

  return (
    <label>
      Find contacts by name
      <input type="text" value={filter} name="filter" onChange={filterInput} />
    </label>
  );
}

export default FilterInput;
