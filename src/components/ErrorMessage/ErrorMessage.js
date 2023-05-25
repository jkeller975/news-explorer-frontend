import React from "react";

const NotFound = () => {
  return (
    <div className="error">
      <i className="error__icon"></i>
      <h3 className="error__title">Error</h3>
      <p className="error__text">
        Sorry, something went wrong during the request. There may be a
        connection issue or the server may be down. Please try again later.
      </p>
    </div>
  );
};

export default NotFound;
