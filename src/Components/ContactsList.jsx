import React from 'react';
import {
  getShownContacts,
  getContacts,
} from '../Redux/contacts/contacts-selectors';
import { useDispatch, useSelector } from 'react-redux';
import { deleteContact } from '../Redux/contacts/contacts-actions';

function ContactsList() {
  const dispatch = useDispatch();
  const contactsToShow = useSelector(getShownContacts);
  const contacts = useSelector(getContacts);

  if (contacts.length) {
    return (
      <ul className="contactList">
        {contactsToShow.map(({ id, name, number }) => (
          <li className="contactItem" key={id}>
            <p>
              {name} : {number}
            </p>
            <button
              type="button"
              onClick={() => dispatch(deleteContact(id))}
              className="deleteContactButton"
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    );
  } else {
    return <h3>Add new contacts</h3>;
  }
}

export default ContactsList;
