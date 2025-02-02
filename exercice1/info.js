import {
    EMAIL,
    PHONE,
    ADDRESSES,
    ADDRESS
} from './contants/texts';

export const Info = ({ info }) => {    
    return (
        <>
           <div>
                <img src={info.avatarUrl} alt={info.fullName}/>
                <h3>{info.fullName}</h3> - <h4>{info.company}</h4>
            </div>
            <p>{info.details}</p>
            <ul>
                <li>{EMAIL} {info.email}</li>
                <li>{PHONE} {info.phoneNumber}</li>
                <li>
                    {info.addresses.length > 1
                        ? <h4>{ADDRESSES}</h4>
                        : <h4>{ADDRESS}</h4>
                    }
                    {info.addresses.map((address, index) => (
                        <ul key={index}>
                            <li>{address.line1}</li>
                            <li>{address.line2}</li>
                            <li>{address.zipCode}</li>
                            <li>{address.city}</li>
                            <li>{address.state}</li>
                        </ul>
                    ))}
                </li>
            </ul>    
        </>
    );
};