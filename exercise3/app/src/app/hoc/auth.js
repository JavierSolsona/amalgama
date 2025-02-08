import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { useSelector } from 'react-redux';

import { LOGIN } from '@/app/constants/routes';

const withAuth = (WrappedComponent) => {
  return (props) => {
    const { push } = useRouter();
    const token = useSelector((state) => state.user.token);

    useEffect(() => {
      if (!token) {
        push(LOGIN);
      }
    }, [token]);

    if (!token) {
      return null;
    };

    return <WrappedComponent {...props} />;
  };
};

export default withAuth;
