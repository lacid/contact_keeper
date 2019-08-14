import React, { useContext } from 'react';
import ContactContext from '../../context/contact/contactContext';

export default function ContactFilter() {
  const { filterContacts, clearFilter } = useContext(ContactContext);

  return (
    <form>
      <input
        type="text"
        placeholder="Filter Contacts..."
        onChange={e => {
          e.target.value ? filterContacts(e.target.value) : clearFilter();
        }}
      />
    </form>
  );
}
