import React, { useCallback, useMemo, useState } from "react";
import { Country } from "../types/types";

interface BucketListContextProps {
  selectedCountries: Country[];
  addCountry: (country: Country) => void;
  removeCountry: (cca3: string) => void;
}

const BucketListContext = React.createContext<BucketListContextProps>({
  selectedCountries: [],
  addCountry: () => null,
  removeCountry: () => null,
});

export interface BucketListContextPropsBase {
  children?: React.ReactNode;
}

export const BucketListContextProvider = ({
  children,
}: BucketListContextPropsBase) => {
  const [selectedCountries, setSelectedCountries] = useState<Country[]>([]);

  const addCountry = useCallback((country: Country) => {
    setSelectedCountries((prev) => {
      return [...prev, country];
    });
  }, []);

  const removeCountry = useCallback((cca3: string) => {
    setSelectedCountries((prev) => {
      return prev.filter((prevCountry) => prevCountry.cca3 !== cca3);
    });
  }, []);

  const contextValue = useMemo(
    () => ({
      selectedCountries,
      addCountry,
      removeCountry,
    }),
    [selectedCountries, addCountry, removeCountry]
  );
  return (
    <BucketListContext.Provider value={contextValue}>
      {children}
    </BucketListContext.Provider>
  );
};

export default BucketListContext;
