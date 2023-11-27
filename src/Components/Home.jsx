import React, { useContext } from 'react';
import { AuthContext } from '../provider/authProvider';

const Home = () => {
  const info= useContext(AuthContext);
    return (
        <div>
          this is home  {info.name}
        </div>
    );
};

export default Home;