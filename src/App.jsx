import React from "react";
import PropTypes from "prop-types";

import Header from "components/header";

import "./global.css";

const App = ({ children }) => (
  <>
    <Header />
    <main>{children}</main>
  </>
);

App.propTypes = {
  children: PropTypes.node,
};

App.defaultProps = {
  children: null,
};

export default App;
