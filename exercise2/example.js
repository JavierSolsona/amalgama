import { useDispatch, useSelector } from 'react-redux';

import { setBooks, setUsers } from './store';
import { APIBooks, APIUsers } from './data';

export const Example = () => {
    // Variables from the API
    const books = APIBooks;
    const users = APIUsers;

    // how set the values
    const dispatch = useDispatch();
    dispatch(setBooks(books));
    dispatch(setUsers(users));

    // How get the values
    const booksInStore = useSelector((state) => state.books);
    const usersInStore = useSelector((state) => state.users);  
  
    return <></>;
  };