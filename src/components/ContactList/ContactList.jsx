import { deleteContacts } from "../../redux/contactsSlice";
import { Contact } from "../Contact/Contact";
import css from "./ContactList.module.css";
import { useDispatch, useSelector } from "react-redux";
import { getContacs, getFilter } from "../../redux/selectors";
export const ContactList = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(getContacs);
  const filter = useSelector(getFilter);
  const visibleContacts = contacts.filter((contact) =>
    contact.name.toLowerCase().includes(filter)
  );
  return (
    <ul className={css.contactList}>
      {visibleContacts.map(({ id, name, number }) => (
        <li className={css.contact} key={id}>
          <Contact
            id={id}
            name={name}
            number={number}
            onDelete={() => dispatch(deleteContacts(id))}
          />
        </li>
      ))}
    </ul>
  );
};
