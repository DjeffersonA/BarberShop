import React, { createContext, useContext, ReactNode, useState } from 'react';

interface AppContextType {
  barberShopName: string;
  setBarberShopName: (name: string) => void;
}

const AppContext = createContext<AppContextType | undefined>(undefined);

interface AppProviderProps {
  children: ReactNode;
}

export const AppProvider = ({ children }: AppProviderProps) => {
  const [barberShopName, setBarberShopName] = useState('BarberShop');

  return (
    <AppContext.Provider value={{ barberShopName, setBarberShopName }}>
      {children}
    </AppContext.Provider>
  );
};

export const useAppContext = () => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error('useAppContext must be used within an AppProvider');
  }
  return context;
};