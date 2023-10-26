// contexts/AuthContext.js
import { createContext, useContext, useEffect, useState } from 'react';

const AuthContext = createContext();

export function useAuth() {
  return useContext(AuthContext);
}

export function AuthProvider({ children }) {
  const [token, setToken] = useState(null);
  const [activeUser, setActiveUser] = useState(undefined)
  const [authenticated,setAuthenticated] = useState(false)

  useEffect(() => {
    console.log(activeUser)
  },[token])
  
  
  
  return (
    <AuthContext.Provider 
      value={{ 
        token, 
        setToken,
        authenticated,
        setAuthenticated,
        activeUser,
        setActiveUser
      }}>
      {children}
    </AuthContext.Provider>
  );
}
export const useAuthContext = () =>  useContext(AuthContext)
