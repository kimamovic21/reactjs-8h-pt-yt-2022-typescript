import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

const Contact = () => {

  const username = useSelector((state: any) => state.user.value.username);

  return (
    <div>
        <h2>This is Contact Page</h2>
    </div>
  );
};

export default Contact;
