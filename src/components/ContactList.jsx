import { useDispatch, useSelector } from 'react-redux';
import { getCont, getFilter } from '../redux/Selectors';
import { delContactsThunk } from '../redux/ContactsThunk';

const ContactList = function () {
  const dispatch = useDispatch();
  const filtered = useSelector(getFilter);
  const contacts = useSelector(getCont);

  const filterContact = e => {
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(filtered.toLowerCase())
    );
  };

  const filteredContacts = filterContact();

  return (
    <ul className="contact-menu">
      {filteredContacts.map(({ id, name, phone }) => (
        <li className="contact-list" key={id}>
          <p>
            {name}:{phone}
            <button className="delete-btn"
              data-id={id}
              onClick={() => dispatch(delContactsThunk(id))}
              type="button"
            >
              Delete
            </button>
          </p>
        </li>
      ))}
    </ul>
  );
};

export default ContactList;