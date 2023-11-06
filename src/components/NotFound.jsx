import React from "react";
import { useNavigate } from "react-router-dom";

const NoMatch = () => {
  const navigate = useNavigate();

  const goBack = () => {
    navigate(-1);
  };

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        minHeight: "100vh",
      }}
    >
      <div className="error-page text-center">
        <h1 className="error-code" style={{ fontSize: "72px", color: "red" }}>
          404
        </h1>
        <p className="error-text" style={{ fontSize: "32px" }}>
          Not Found
        </p>
        <button
          className="btn btn-primary"
          onClick={goBack}
          style={{ marginTop: "20px" }}
        >
          Go Back
        </button>
      </div>
    </div>
  );
};

export default NoMatch;
