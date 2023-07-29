import React from 'react';
import { Provider } from 'react-redux';
import store from 'redux/store';
import ContactForm from './ContactForm';
import ContactList from './ContactList';
import Filter from './Filter';

import '../index.css';

export const App = () => {
  return (
    <Provider store={store}>
      <div className="wrapper">
        <h1>Phonebook</h1>
        <ContactForm />
        <h2>Contacts</h2>
        <Filter />
        <ContactList />
      </div>
    </Provider>
  );
};

export default App;
