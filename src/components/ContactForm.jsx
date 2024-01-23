import { useState, useEffect } from 'react';
import { getCont } from '../redux/Selectors';
import { useDispatch, useSelector } from 'react-redux';
import { addContactsThunk, getContactsThunk } from '../redux/ContactsThunk';


const ContactForm = () => {
  const dispatch = useDispatch();
  const [name, setName] = useState('');
  const [phone, setNumber] = useState('');

  useEffect(() => {

    dispatch(getContactsThunk());
  }, [dispatch]);

  const handleChange = evt => {
    const { name, value } = evt.target;
    name === 'name' ? setName(value) : setNumber(value);
  };

  const handleSubmit = e => {
    e.preventDefault();
    if (
      contacts.some(
        value => value.name.toLocaleLowerCase() === name.toLocaleLowerCase()
      )
    ) {
      alert(`${name} is alredy in contacts`);
    } else {
      dispatch(addContactsThunk({ name, phone }));
    }
    reset();
  };

  const reset = () => {
    setName('');
    setNumber('');
  };
  const contacts = useSelector(getCont);

  return (
    <form onSubmit={handleSubmit}
    className="contact-form">
       <label>
        Name
        <input value={name}
          type="text"
          name="name"
          required
          onChange={handleChange}/>
      </label>
     <label>
        Number
        <input value={phone}
          type="tel"
          name="number"
          onChange={handleChange} required />
      </label>
      <button className="contact-btn" type="submit">
        Add contact
      </button>
    </form>
  );
};

export default ContactForm;