import React, { useContext } from "react";
import ReactPaginate from "react-paginate";
import { Store } from "../Context";
import { ContextTypeDef } from "../Models/Model";
import SingleBikeCard from "./SingleBikeCard";

const BikeList = () => {
  const { bikes, pageCount, stolenCount, setCurrentPage, currentPage } =
    useContext(Store) as ContextTypeDef;

  const handlePageClick = (data: any) => {
    setCurrentPage(data.selected + 1);
  };

  return (
    <div>
      {/* <label data-testid="header">Test</label> */}
      {bikes.map((bike) => (
        <SingleBikeCard bike={bike} key={bike.id} />
      ))}
      {pageCount && (
        <ReactPaginate
          previousLabel={"Previous"}
          nextLabel={"Next"}
          breakLabel={"..."}
          pageCount={pageCount}
          forcePage={currentPage - 1}
          marginPagesDisplayed={2}
          pageRangeDisplayed={3}
          onPageChange={handlePageClick}
          containerClassName={"pagination justify-content-center"}
          pageClassName={"page-item"}
          pageLinkClassName={"page-link"}
          previousClassName={"page-item"}
          previousLinkClassName={"page-link"}
          nextClassName={"page-item"}
          nextLinkClassName={"page-link"}
          breakClassName={"page-item"}
          breakLinkClassName={"page-link"}
          activeClassName={"active"}
        />
      )}
      <p className="w-100 text-center">Total {stolenCount} results found</p>
    </div>
  );
};

export default BikeList;
