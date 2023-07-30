import React from 'react';
import { useDispatch } from 'react-redux';
import { addContact } from 'redux/contacts/operations';

import styles from './ContactForm.module.css';

const ContactForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = ev => {
    ev.preventDefault();

    const form = ev.target;
    const name = form.elements.name.value;
    const number = form.elements.number.value;

    const contact = {
      name,
      number,
    };

    dispatch(addContact(contact));

    form.reset();
  };

  return (
    <form onSubmit={handleSubmit} className={styles.container}>
      <label>
        Name
        <input
          type="text"
          name="name"
          // value={name}
          // onChange={handleChange}
          className={styles.input}
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
        />
      </label>
      <label className={styles.label}>
        Number
        <input
          type="tel"
          name="number"
          // value={number}
          // onChange={handleChange}
          className={styles.input}
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
        />
      </label>
      <button type="submit">Add contact, M'lord</button>
    </form>
  );
};

export default ContactForm;
