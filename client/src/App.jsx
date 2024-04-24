import { Outlet } from "react-router-dom";
import Footer from "./components/Footer";
import "./styles/app.scss";
import NavBar from "./components/NavBar";

function App() {
  return (
    <>
      <NavBar className="navbar" />
      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  );
}
export default App;
