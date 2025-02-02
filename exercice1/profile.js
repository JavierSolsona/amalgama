import Info from './info';
import {
    HOME,
    MY_CONTACTS,
    ICON,
    PROFILE
} from './contants/texts';
import {
    HOME as HOME_PATH,
    CONTACTS as CONTACTS_PATH
} from './contants/routes';

const ProfileScreen = ({ profile }) => {  
    const profileToDisplay = {
        avatarUrl: profile.avatar_url,
        fullName: `${profile.first_name} ${profile.last_name}`,
        company: profile.company,
        details: truncate(profile.details, 100),
        email: profile.email,
        phoneNumber: `(${profile.phone.area_code}) ${profile.phone.number}`,
        addresses: profile.addresses.map(address => ({
            line1: address.line_1,
            line2: address.line_2,
            zipCode: address.zip_code,
            city: findById(cities, address.city_id),
            state: findById(states, address.state_id),
        }))
    }
    
    return (
        <div>
            <nav>
                <ul>
                    <li><a href={HOME_PATH}>{HOME}</a></li>
                    <li><a href={CONTACTS_PATH}>{MY_CONTACTS}</a></li>
                </ul>
            </nav>
            <h1>{PROFILE} {ICON}</h1>
            <Info info={profileToDisplay}/>
        </div>
    );
};