import { useState, useContext, createContext } from 'react';

const AppContext = createContext();

const AppContextProvider = ({ children }) => {
  const [isSidebarVisible, setIsSidebarVisible] = useState(false);
  const [isModalVisible, setIsModalVisible] = useState(false);

  const openModal = () => {
    setIsModalVisible(true);
  };

  const closeModal = () => {
    setIsModalVisible(false);
  };

  const openSidebar = () => {
    setIsSidebarVisible(true);
    console.log('open sidebar');
  };

  const closeSidebar = () => {
    setIsSidebarVisible(false);
    console.log('close sidebar');
  };

  const values = {
    isSidebarVisible,
    isModalVisible,
    openModal,
    closeModal,
    openSidebar,
    closeSidebar,
  };
  return <AppContext.Provider value={values}>{children}</AppContext.Provider>;
};
//CUSTOM HOOK
export const useAppContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppContextProvider };
