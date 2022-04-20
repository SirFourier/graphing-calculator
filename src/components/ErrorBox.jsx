import React from "react";
import PropTypes from "prop-types";

export default function ErrorBox({ message }) {
  return (
    <React.Fragment>
      {message && (
        <div className="alert alert-danger" role="alert">
          {message}
        </div>
      )}
    </React.Fragment>
  );
}

ErrorBox.propTypes = {
  message: PropTypes.string.isRequired,
};

ErrorBox.defaultProps = {
  message: "",
};
