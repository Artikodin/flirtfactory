import React from "react";
import PropTypes from "prop-types";
import text from "../../ressources/json/datas.json";

export const TextContext = React.createContext();
const TextProvider = ({ children }) => (
  <TextContext.Provider value={text}>{children}</TextContext.Provider>
);

TextProvider.propTypes = {
  children: PropTypes.node.isRequired
};

export default TextProvider;
