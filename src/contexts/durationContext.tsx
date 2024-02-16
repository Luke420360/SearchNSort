import { createContext, useContext, useState } from "react";
import SortAlgorithm from "../types/SortAlgorithm";
import SearchAlgorithm from "../types/SearchAlgorithm";

type DurationContextProviderProps = {
  children: React.ReactNode;
}

type Duration = {
    algorithm: SortAlgorithm | SearchAlgorithm | null,
    searchedRecords: number,
    durationTime: number
} | null

type DurationContext = {
  duration: Duration;
  setDuration: React.Dispatch<React.SetStateAction<Duration | null>>;
}

export const DurationContext = createContext<DurationContext | null>(null);

export const DurationContextProvider = ({ children }: DurationContextProviderProps) => {
    const [duration, setDuration] = useState<Duration>(null)
  return (
    <DurationContext.Provider value={{ duration, setDuration }}>
        {children}
    </DurationContext.Provider>
  )
}

export const useDuration = () => {
  const context = useContext(DurationContext);
  
  if (!context) {
    throw new Error('Data Context should be used!')
  }

  return context
}