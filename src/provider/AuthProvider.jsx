import React, { createContext } from 'react';
import PropTypes from 'prop-types';

export const AuthContext=createContext();
const AuthProvider = ({children}) => {
    const authInfo={
        name:'ami kola khai ." '
    }
    return (
        <AuthContext.Provider value={authInfo}>
              {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;

AuthProvider.propTypes={
    children:PropTypes.node,
}