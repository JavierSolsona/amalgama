import Info from './info';
import {
    HOME,
    MY_CONTACTS,
    CONTACTS,
    ICON
} from './contants/texts';
import {
    HOME as HOME_PATH,
    CONTACTS as CONTACTS_PATH
} from './contants/routes';

const ContactsScreen = ({ contacts, cities, states }) => {
    const contactsToDisplay = contacts.map(contact => ({
        id: contact.id,
        avatarUrl: contact.avatar_url,
        fullName: `${contact.first_name} ${contact.last_name}`,
        company: contact.company,
        details: truncate(contact.details, 100),
        email: contact.email,
        phoneNumber: `(${contact.phone.area_code}) ${contact.phone.number}`,
        addresses: contact.addresses.map(address => ({
            line1: address.line_1,
            line2: address.line_2,
            zipCode: address.zip_code,
            city: findById(cities, address.city_id),
            state: findById(states, address.state_id),
        }))
    }));
    
    return (
        <div>
            <nav>
                <ul>
                    <li><a href={HOME_PATH}>{HOME}</a></li>
                    <li><a href={CONTACTS_PATH}>{MY_CONTACTS}</a></li>
                </ul>
            </nav>
            <h1>{CONTACTS} {ICON}</h1>
            {contactsToDisplay.map((contact, index) => (
                <div key={index}>
                    <Info info={contact}/>
                </div>
            ))}
        </div>
    );
};