import {
    EMAIL,
    PHONE,
    ADDRESSES,
    ADDRESS
} from './contants/texts';

const AddressList = ({ addresses }) => (
    <>
        <h4>{addresses.length > 1 ? {ADDRESSES} : {ADDRESS}}</h4>
        {addresses.map((address, index) => (
            <ul key={index}>
                <li>{address.line1}</li>
                <li>{address.line2}</li>
                <li>{address.zipCode}</li>
                <li>{address.city}</li>
                <li>{address.state}</li>
            </ul>
        ))}
    </>
);

export const ContactInfo = ({ contact }) => {    
    return (
        <>
           <div>
                <img src={contact.avatarUrl} alt={contact.fullName}/>
                <h3>{contact.fullName}</h3> - <h4>{contact.company}</h4>
            </div>
            <p>{contact.details}</p>
            <ul>
                <li>{EMAIL} {contact.email}</li>
                <li>{PHONE} {contact.phoneNumber}</li>
                <li>
                    <AddressList addresses={contact.addresses} />
                </li>
            </ul>    
        </>
    );
};