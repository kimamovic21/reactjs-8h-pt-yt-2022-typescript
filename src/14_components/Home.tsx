import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

const Home = () => {

  const username = useSelector((state: any) => state.user.value.username);

  return (
    <div>
        <h2>This is Home Page</h2>
        <h2>{username}</h2>
    </div>
  );
};

export default Home;
