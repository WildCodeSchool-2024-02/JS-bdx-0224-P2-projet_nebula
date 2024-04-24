import { createContext, useMemo, useState } from 'react';
import PropTypes from "prop-types";

export const ButtonContext = createContext();

export function ButtonProvider ({ children }) {
  const [isButtonVisible, setIsButtonVisible] = useState(true);

  const contextValue = useMemo(() => ({
    isButtonVisible,
    setIsButtonVisible
  }), [isButtonVisible]);

  return (
    <ButtonContext.Provider value={contextValue}>
      {children}
    </ButtonContext.Provider>
  );
};
ButtonProvider.propTypes = {
  children: PropTypes.node.isRequired,
};