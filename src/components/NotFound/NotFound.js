import React from "react";

const NotFound = () => {
  return (
    <div className="not-found">
      <i className="not-found__icon"></i>
      <h3 className="not-found__title">Nothing Found</h3>
      <p className="not-found__text">
        Sorry, but nothing matched your search terms.
      </p>
    </div>
  );
};

export default NotFound;
