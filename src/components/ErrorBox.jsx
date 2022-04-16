import React from "react";

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
