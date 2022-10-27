import React, { createContext, useState } from "react";
import { Bike, ContextTypeDef } from "./Models/Model";

export const Store = createContext<ContextTypeDef | null>(null);

interface Props {
  children: JSX.Element | JSX.Element[];
}

const Context: React.FC<Props> = ({ children }) => {
  const [bikes, setBikes] = useState<Bike[]>([]);
  const [loader, setLoader] = useState<boolean>(false);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [stolenCount, setStolenCount] = useState<number>(0);
  const [pageCount, setPageCount] = useState<number>(0);
  const [searchKeyword, setSearchKeyword] = useState<string>("");
  return (
    <Store.Provider
      value={{
        bikes,
        setBikes,
        loader,
        setLoader,
        currentPage,
        setCurrentPage,
        stolenCount,
        setStolenCount,
        pageCount,
        setPageCount,
        searchKeyword,
        setSearchKeyword,
      }}
    >
      {children}
    </Store.Provider>
  );
};

export default Context;
