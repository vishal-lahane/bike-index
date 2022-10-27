import axios from "axios";
import React, { useContext, useEffect, useRef, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Loader from "./components/Loader";
import { Store } from "./Context";
import { ContextTypeDef } from "./Models/Model";
import BikeList from "./components/BikeList";
import Filters from "./components/Filters";
import { fetchAllData, fetchFilterddata } from "./Utilities/FetchData";
import ErrorMessage from "./components/ErrorMessage";

function App() {
  axios.defaults.baseURL = process.env.REACT_APP_API_BASE_URL;
  axios.defaults.headers["Content-Type"] = "application/json";

  const [error, setError] = useState<boolean>(false);
  const [errorMessage, setErrorMessage] = useState<string>("");

  const {
    loader,
    currentPage,
    searchKeyword,
    bikes,
    setBikes,
    setLoader,
    setStolenCount,
    setPageCount,
    setCurrentPage,
  } = useContext(Store) as ContextTypeDef;

  const previousValue = usePreviousValue(searchKeyword);

  useEffect(() => {
    fetchNewData();
  }, [currentPage, searchKeyword]);

  const fetchNewData = async () => {
    setLoader(true);
    if (searchKeyword !== previousValue) {
      setCurrentPage(1);
    }

    if (!searchKeyword)
      await fetchAllData(currentPage)
        .then((res) => {
          updateCurrentState(res);
        })
        .catch((err) => {
          setError(true);
          setErrorMessage(err.message);
        });
    else
      await fetchFilterddata(currentPage, searchKeyword)
        .then((res) => {
          updateCurrentState(res);
        })
        .catch((err) => {
          setError(true);
          setErrorMessage(err.message);
        });
    setLoader(false);
  };
  const updateCurrentState = (data: any) => {
    setBikes(data.bikes);
    setStolenCount(data.rcount);
    setPageCount(Math.ceil(data.rcount / 10));
  };

  return (
    <div className="container">
      {loader && <Loader />}
      <div className="row justify-content-center my-5">
        <div className="col-md-6 text-center">
          <h1>BIKE INDEX</h1>
          <Filters />
          {error && <ErrorMessage errorMessage={errorMessage} />}
        </div>
      </div>
      {bikes.length ? <BikeList /> : <p>No data found</p>}
    </div>
  );
}
function usePreviousValue(value: string) {
  const ref = useRef<string>();
  useEffect(() => {
    ref.current = value;
  });
  return ref.current;
}
export default App;
