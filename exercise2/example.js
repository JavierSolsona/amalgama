import { useDispatch, useSelector } from 'react-redux';

import { setBooks, setUsers } from './store';

export const Example = () => {
    // Variables from the API
    const books = [];
    const users = [];

    // how set the values
    const dispatch = useDispatch();
    dispatch(setBooks(books));
    dispatch(setUsers(users));
  
  
    return <></>;
  };