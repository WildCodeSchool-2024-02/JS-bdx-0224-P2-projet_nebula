import { Outlet } from "react-router-dom";
import Footer from "./components/Footer";
import "./styles/app.scss";
import NavBar from "./components/NavBar";
import Arrow from "./components/Arrow";

function App() {
  return (
    <>
      <NavBar className="navbar" />
      <main>
        <Outlet />
        <Arrow />
      </main>
      <Footer />
    </>
  );
}
export default App;
