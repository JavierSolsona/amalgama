import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { useSelector } from 'react-redux';

import { HOME } from '@/app/constants/routes';

const withGuest = (WrappedComponent) => {
  return (props) => {
    const { push } = useRouter();
    const token = useSelector((state) => state.user.token);

    useEffect(() => {
      if (token) {
        push(HOME);
      }
    }, [token]);
    
    if (token) {
      return null;
    };

    return <WrappedComponent {...props} />;
  };
};

export default withGuest;
