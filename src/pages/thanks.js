import React from "react";
import PropTypes from "prop-types";
import Layout from "../components/layout";

function Thanks({ location }) {
  return (
    <Layout location={location} maxWidth="950px">
      <div style={{ marginTop: "2rem" }}>
        <h1>Thank you for subscribing</h1>
        <p>
          You are now confirmed. You can expect to receive emails as I create
          new content.
        </p>
      </div>
    </Layout>
  );
}

Thanks.propTypes = {
  location: PropTypes.object.isRequired
};

export default Thanks;
