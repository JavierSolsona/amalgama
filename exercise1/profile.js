import ContactInfo from './info';
import NavBar from './nav-bar';
import { ICON, PROFILE } from './contants/texts';
import { generateProfile } from './utils/generate-profile';

const ProfileScreen = ({ profile, cities, states }) => {  
    const profileToDisplay = generateProfile(profile, cities, states);
    
    return (
        <div>
            <NavBar />
            <h1>{PROFILE} {ICON}</h1>
            <ContactInfo contact={profileToDisplay}/>
        </div>
    );
};