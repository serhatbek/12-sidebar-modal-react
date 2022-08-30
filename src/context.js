import { useState, useContext, createContext } from 'react';

const AppContext = createContext();

const AppContextProvider = ({ children }) => {
  const values = {
    name: 'tb',
    lastName: 'bek',
    age: 22,
    prof: 'artist',
  };
  return <AppContext.Provider value={values}>{children}</AppContext.Provider>;
};
//CUSTOM HOOK
export const useAppContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppContextProvider };
