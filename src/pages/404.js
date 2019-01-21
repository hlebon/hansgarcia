import React from "react";
import { Link } from "gatsby";
import Layout from "../components/layout";

export default ({ location }) => (
  <Layout location={location} maxWidth="950px">
    <h1>Content not found :(</h1>
    <Link to="/">go home</Link>
  </Layout>
);
