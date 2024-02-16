import { createContext, useContext, useState } from "react";
import Data from "../types/Data";

type DataContextProviderProps = {
  children: React.ReactNode;
}

type DataContext = {
  data: Data[] | null;
  setData: React.Dispatch<React.SetStateAction<Data[] | null>>;
  filteredData: Data[] | null;
  setFilteredData: React.Dispatch<React.SetStateAction<Data[] | null>>;
}

export const DataContext = createContext<DataContext | null>(null);

export const DataContextProvider = ({ children }: DataContextProviderProps) => {
    const [data, setData] = useState<Data[] | null>(null)
    const [filteredData, setFilteredData] = useState<Data[] | null>(null)
  return (
    <DataContext.Provider value={{ data, setData, filteredData, setFilteredData }}>
        {children}
    </DataContext.Provider>
  )
}

export const useData = () => {
  const context = useContext(DataContext);
  
  if (!context) {
    throw new Error('Data Context should be used!')
  }

  return context
}