import React from "react";
import PropTypes from "prop-types";
import Layout, { Content } from "../components/layout";

function Confirm(props) {
  const { location } = props;
  return (
    <Layout location={location}>
      <Content>
        <div style={{ marginTop: "2rem" }}>
          <h1>Just one more step...</h1>
          <p>
            Thanks for subscribing. You must verify your mail and confirm your
            subscription.
          </p>
        </div>
      </Content>
    </Layout>
  );
}

Confirm.propTypes = {
  location: PropTypes.object.isRequired
};

export default Confirm;
