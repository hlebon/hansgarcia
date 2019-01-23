import React from "react";
import PropTypes from "prop-types";

function Band({ panamaFlag, maxWidth }) {
  return (
    <div
      style={{
        width: "100%",
        background:
          "linear-gradient(to left,rgba(33,150,243,0.9),rgba(87,148,197,1))",
        padding: ".5rem"
      }}
    >
      <div style={{ maxWidth, margin: "auto" }}>
        <p
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            textShadow: "2px 2px #ff0000"
          }}
        >
          The Panama flag
          {"  "}
          <img
            src={panamaFlag}
            style={{ margin: "0 7px" }}
            alt="Logo"
            style={{ width: 25, height: 25, borderRadius: "7px" }}
          />
          {"  "}
          mean that post is in Spanish
        </p>
      </div>
    </div>
  );
}

Band.propTypes = {
  panamaFlag: PropTypes.string.isRequired,
  maxWidth: PropTypes.string.isRequired
};

export default Band;
