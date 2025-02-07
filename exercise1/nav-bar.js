import { HOME, MY_CONTACTS } from './contants/texts';
import {
    HOME as HOME_PATH,
    CONTACTS as CONTACTS_PATH
} from './contants/routes';

const NavBar = () => {
    return (
        <nav>
            <ul>
                <li><a href={HOME_PATH}>{HOME}</a></li>
                <li><a href={CONTACTS_PATH}>{MY_CONTACTS}</a></li>
            </ul>
        </nav>
    );
};