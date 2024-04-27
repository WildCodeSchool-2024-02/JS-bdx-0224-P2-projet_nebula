import { createContext, useState, useMemo } from "react";
import PropTypes from "prop-types";

export const ShipContext = createContext();

export function ShipProvider({ children }) {
  const initialShips = [
    {
      name: "C2 Hercule",
      image: "https://media.starcitizen.tools/thumb/c/cc/C2_Feature_Style_clouds.jpg/1920px-C2_Feature_Style_clouds.jpg",
    },
    {
      name: "E1 Spirit",
      image: "https://media.starcitizen.tools/thumb/c/cd/EXT_Carrack_Microtech_112019-Min.jpg/1920px-EXT_Carrack_Microtech_112019-Min.jpg",
    },
  ];

  const [ships, setShips] = useState(initialShips);

  const value = useMemo(() => ({ ships, setShips }), [ships, setShips]);

  return (
    <ShipContext.Provider value={value}>
      {children}
    </ShipContext.Provider>
  );
};
ShipProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
