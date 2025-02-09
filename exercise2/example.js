import { useDispatch, useSelector } from 'react-redux';

import { setBooks, setUsers, setAuthors } from './store';
import { APIBooks, APIUsers } from './data';

export const Example = () => {
    // Variables from the API
    const booksApi = APIBooks;
    const usersApi = APIUsers;

    // convert data
    const authors = getAuthors(booksApi);
    const books = formatBooks(booksApi);
    const users = formatUsers(usersApi);

    // how set the values
    const dispatch = useDispatch();
    dispatch(setAuthors(authors));
    dispatch(setBooks(books));
    dispatch(setUsers(users));

    // How get the values
    const authorsInStore = useSelector((state) => state.authors);
    const booksInStore = useSelector((state) => state.books);
    const usersInStore = useSelector((state) => state.users);  
  
    return <></>;
  };