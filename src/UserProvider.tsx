import React, { createContext, useContext, useState } from 'react';

const UserContext = createContext<any>(null);

export const UserProvider = ({ user, children }: any) => {
  const [currentUser, setCurrentUser] = useState(user);

  return <UserContext.Provider value={{ currentUser, setCurrentUser }}>{children}</UserContext.Provider>;
};

export const useAuth = () => useContext(UserContext);
