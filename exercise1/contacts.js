import ContactInfo from './info';
import NavBar from './nav-bar';
import { CONTACTS, ICON  } from './contants/texts';
import { generateProfile } from './utils/generate-profile';

const ContactsScreen = ({ contacts, cities, states }) => {
    const contactsToDisplay = contacts.map(contact => ({
        id: contact.id,
        ...generateProfile(contact, cities, states)
    }));
    
    return (
        <div>
            <NavBar />
            <h1>{CONTACTS} {ICON}</h1>
            {contactsToDisplay.map((contact) => (
                <div key={contact.id}>
                    <ContactInfo contact={contact}/>
                </div>
            ))}
        </div>
    );
};