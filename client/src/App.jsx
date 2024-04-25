import { Outlet } from "react-router-dom";
import { ReservationProvider } from "./Contexts/ReservationContext";
import { ButtonProvider } from "./Contexts/ButtonContext";
import Footer from "./components/Footer";
import "./styles/app.scss";
import NavBar from "./components/NavBar";
import Arrow from "./components/Arrow";

function App() {
  return (
    <>
      <NavBar className="navbar" />
      <main>
        <ButtonProvider>
          <ReservationProvider>
            <Outlet />
          </ReservationProvider>
        </ButtonProvider>
        <Outlet />
        <Arrow />
      </main>
      <Footer />
    </>
  );
}
export default App;
