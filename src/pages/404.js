import React from "react";
import { Link } from "gatsby";
import Layout from "../components/layout";

export default ({ location }) => (
  <Layout location={location}>
    <div>Error 404</div>
    <Link to="/">Ir a Inicio</Link>
  </Layout>
);
