import { NavLink, Route, Routes } from "react-router-dom";

export const App = () => {
  const [contacts, setContacts] = useState([]);
  useEffect(() => {
    const contactsList = JSON.parse(localStorage.getItem('contacts')) ?? [];
    setContacts(contactsList);
  }, []); // ComponentDidMount
  useEffect(() => {
    localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]); // ComponentDidUpdate

  const addContact = (contact) => {
    setContacts([...contacts, contact]);
  }

  const deleteContact = (id) => {
    setContacts(contacts.filter(contact => contact.id !== id));
  }

  return (
    <div className="App">
      <header className="App-header">
        <h1>Contacts</h1>
        <nav>
          <NavLink to="/" end>Home</NavLink>
          <NavLink to="/add">Add Contact</NavLink>
        </nav>
      </header>
      <main>
        <Routes>
          <Route path="/" element={<Home contacts={contacts} deleteContact={deleteContact} />} />
          <Route path="/add" element={<AddContact addContact={addContact} />} />
        </Routes>
      </main>
    </div>
  );
}

// Path: src/components/Home.jsx
export const Home = ({ contacts, deleteContact }) => {
  return (
    <div>
      <h2>Home</h2>
      <ul>
        {contacts.map(contact => (
          <li key={contact.id}>
            <Link to={`/contact/${contact.id}`}>{contact.name}</Link>
            <button onClick={() => deleteContact(contact.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

// Path: src/components/AddContact.jsx
export const AddContact = ({ addContact }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    addContact({ id: uuid(), name, email });
    setName('');
    setEmail('');
  }

  return (
    <div>
      <h2>Add Contact</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder="Name" />
        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email" />
        <button type="submit">Add Contact</button>
      </form>
    </div>
  );
}

// Path: src/components/Contact.jsx
export const Contact = ({ contact }) => {
  return (
    <div>
      <h2>Contact</h2>
      <p>{contact.name}</p>
      <p>{contact.email}</p>
    </div>
  );
}

// Path: src/components/NotFound.jsx
export const NotFound = () => {
  return (
    <div>
      <h2>Not Found</h2>
    </div>
  );
}

// Path: src/components/ContactDetails.jsx
export const ContactDetails = ({ contacts }) => {
  const { id } = useParams();
  const contact = contacts.find(contact => contact.id === id);
  return (
    <div>
      <h2>Contact Details</h2>
      <Contact contact={contact} />
    </div>
  );
}

// Path: src/components/ContactEdit.jsx
export const ContactEdit = ({ contacts, setContacts }) => {
  const { id } = useParams();
  const contact = contacts.find(contact => contact.id === id);
  const [name, setName] = useState(contact.name);
  const [email, setEmail] = useState(contact.email);

  const handleSubmit = (e) => {
    e.preventDefault();
    setContacts(contacts.map(contact => contact.id === id ? { id, name, email } : contact));
  }

  return (
    <div>
      <h2>Edit Contact</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder="Name" />
        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email" />
        <button type="submit">Edit Contact</button>
      </form>
    </div>
  );
}

// Path: src/components/ContactDelete.jsx
export const ContactDelete = ({ contacts, setContacts }) => {
  const { id } = useParams();
  const contact = contacts.find(contact => contact.id === id);

  const handleSubmit = (e) => {
    e.preventDefault();
    setContacts(contacts.filter(contact => contact.id !== id));
  }

  return (
    <div>
      <h2>Delete Contact</h2>
      <Contact contact={contact} />
      <form onSubmit={handleSubmit}>
        <button type="submit">Delete Contact</button>
      </form>
    </div>
  );
}

// Path: src/components/ContactList.jsx
export const ContactList = ({ contacts, deleteContact }) => {
  return (
    <div>
      <h2>Home</h2>
      <ul>
        {contacts.map(contact => (
          <li key={contact.id}>
            <Link to={`/contact/${contact.id}`}>{contact.name}</Link>
            <button onClick={() => deleteContact(contact.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

// Path: src/components/ContactAdd.jsx
export const ContactAdd = ({ addContact }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    addContact({ id: uuid(), name, email });
    setName('');
    setEmail('');
  }

  return (
    <div>
      <h2>Add Contact</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder="Name" />
        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email" />
        <button type="submit">Add Contact</button>
      </form>
    </div>
  );
}

// Path: src/components/ContactEdit.jsx
export const ContactEdit = ({ contacts, setContacts }) => {
  const { id } = useParams();
  const contact = contacts.find(contact => contact.id === id);
  const [name, setName] = useState(contact.name);
  const [email, setEmail] = useState(contact.email);

  const handleSubmit = (e) => {
    e.preventDefault();
    setContacts(contacts.map(contact => contact.id === id ? { id, name, email } : contact));
  }

  return (
    <div>
      <h2>Edit Contact</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder="Name" />
        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email" />
        <button type="submit">Edit Contact</button>
      </form>
    </div>
  );
}

// Path: src/components/ContactDelete.jsx
export const ContactDelete = ({ contacts, setContacts }) => {
  const { id } = useParams();
  const contact = contacts.find(contact => contact.id === id);

  const handleSubmit = (e) => {
    e.preventDefault();
    setContacts(contacts.filter(contact => contact.id !== id));
  }

  return (
    <div>
      <h2>Delete Contact</h2>
      <Contact contact={contact} />
      <form onSubmit={handleSubmit}>
        <button type="submit">Delete Contact</button>
      </form>
    </div>
  );
}

// Path: src/components/ContactDetails.jsx
export const ContactDetails = ({ contacts }) => {
  const { id } = useParams();
  const contact = contacts.find(contact => contact.id === id);
  return (
    <div>
      <h2>Contact Details</h2>
      <Contact contact={contact} />
    </div>
  );
}