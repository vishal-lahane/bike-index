import { debounce } from "lodash";
import React, { useContext } from "react";
import { Store } from "../Context";
import { ContextTypeDef } from "../Models/Model";

const Filters = () => {
  const { setSearchKeyword } = useContext(Store) as ContextTypeDef;
  const debouncedSearch = debounce(async (keyword) => {
    setSearchKeyword(keyword);
  }, 1000);

  const handleChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    debouncedSearch(e.target.value);
  };

  return (
    <div className="row">
      <form>
        <input
          type={"text"}
          onChange={handleChange}
          className="form-control"
          placeholder="Search here"
        />
      </form>
    </div>
  );
};

export default Filters;
