import { createContext, useMemo, useState } from "react";
import PropTypes from "prop-types";

export const GalactapediaContext = createContext();

export function GalactapediaProvider({ children }) {
  const [galactapediaData, setGalactapediaData] = useState([
    { title: "Hurston", id: "0Qlx4dQnxL" },
    { title: "ArcCorp", id: "bBzpNY6ANd" },
    { title: "MicroTech", id: "VYL46xl5Z1" },
    { title: "Crusader", id: "VarZxj1Qav" },
    { title: "Angeli", id: "0QlxqwG14Q" },
    { title: "Aremis", id: "RkGGjdOwQz" },
    { title: "Armitage", id: "RL6KLK4ylo" },
    { title: "Ashana", id: "bZkd47KMB6" },
    { title: "Asura", id: "0qaPo2JOj1" },
    { title: "Borea", id: "R9vGaQPXJN" },
    { title: "Carteyna", id: "RX34BrgYND" },
    { title: "Cascom", id: "0dXKkL9a9o" },
    { title: "Cassel", id: "RPDy6gqX7Z" },
    { title: "Cestulus", id: "0QlKaQ76a5" },
    { title: "Crion", id: "bEzvPwYZ96" },
    { title: "Green", id: "RWoNrNeLKP" },
    { title: "Hyperion", id: "RegWGPlxqy" },
    { title: "Jalan", id: "VarAXY2zy2" },
    { title: "Lago", id: "0dXE5egx98" },
    { title: "Lo", id: "VarAoYEQYd" },
    { title: "Locke", id: "RAX8yYv9jm" },
    { title: "Rytif", id: "R5pA7q691W" },
    { title: "Saisei", id: "Vy22NQJ1q6" },
    { title: "Selene", id: "0qaa69qqNA" },
    { title: "Xōl’uu", id: "VYLzwxDrre" },
    { title: "Spider", id: "VaZwengjJv" },
    { title: "Tangaroa", id: "RX3rnQ3XqM" },
    { title: "Terra IV (Gen)", id: "RMNMv8ekn8" },
    { title: "Terra II (Pike)", id: "Rvl7EggdAr" },
    { title: "Terra", id: "RL6ZrMrLNa" },
    { title: "Vann", id: "bZkk4l4j2D" },
    { title: "Vosca", id: "R9vQWkLNNM" },
    { title: "Xis", id: "bmGJeMv2oK" },
    { title: "Yar", id: "R6dd5pyOZ5" },
    { title: "Lorona", id: "bZkDByjyPO" },
    { title: "Serling", id: "Vy28DwK2a8" },
    { title: "MacArthur", id: "Rz22dGBlnz" },
    { title: "Severus", id: "V3GOdL9lYN" },
    { title: "Reisse", id: "0QljXw43Ev" },
  ]);

  const contextValue = useMemo(
    () => ({ galactapediaData, setGalactapediaData }),
    [galactapediaData, setGalactapediaData]
  );

  return (
    <GalactapediaContext.Provider value={contextValue}>
      {children}
    </GalactapediaContext.Provider>
  );
}

GalactapediaProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
