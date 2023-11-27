import React, { useContext } from 'react';
import { AuthContext } from '../provider/authProvider';

const Home = () => {
  const info= useContext(AuthContext);
  console.log(info)
    return (
        <div>
          this is home 
        </div>
    );
};

export default Home;