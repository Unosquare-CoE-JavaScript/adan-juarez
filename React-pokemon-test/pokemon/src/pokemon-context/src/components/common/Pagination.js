import React from "react";
import { LeftArrow, RightArrow } from "./Arrow";
import '../../static/styles/pagination.scss';

const Pagination = (props) => {
  const { onLeftClick, onRightClick, page, totalPages } = props;

  return (
    <div className="pagination">
      <button className="pagination__btn" onClick={onLeftClick}>
        <div className="pagination__icon">
          <LeftArrow />
        </div>
      </button>
      <div className="pagination__page">
        {page}{" "} de {" "} {totalPages}
      </div>
      <button className="pagination__btn" onClick={onRightClick}>
        <div className="pagination__icon">
          <RightArrow />
        </div>
      </button>
    </div>
  );
};

export default Pagination;
