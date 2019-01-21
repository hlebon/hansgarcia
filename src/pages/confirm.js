import React from "react";
import PropTypes from "prop-types";
import Layout from "../components/layout";

function Confirm(props) {
  const { location } = props;
  return (
    <Layout location={location} maxWidth="950px">
      <div style={{ marginTop: "2rem" }}>
        <h1>Just one more step...</h1>
        <p>
          Thank you for subscribing. You will need to check your inbox and
          confirm your subscription.
        </p>
      </div>
    </Layout>
  );
}

Confirm.propTypes = {
  location: PropTypes.object.isRequired
};

export default Confirm;
