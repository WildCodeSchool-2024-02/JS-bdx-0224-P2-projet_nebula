import { createContext, useContext, useState, useMemo } from "react";
import PropTypes from "prop-types";

const Intro = createContext();

export function IntroProvider({ children }) {
  const [isVisible, setIsVisible] = useState("visibleIntro");
  const changeState = () =>
    setTimeout(() => {
      setIsVisible("notVisibleIntro");
    }, 1000);
  const contextIntroValue = useMemo(() => ({
    isVisible,
    setIsVisible,
    changeState,
  }));

  return <Intro.Provider value={contextIntroValue}>{children}</Intro.Provider>;
}

IntroProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export const useIntro = () => useContext(Intro);
