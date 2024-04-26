import { Outlet } from "react-router-dom";
import { ReservationProvider } from "./Contexts/ReservationContext";
import { ButtonProvider } from "./Contexts/ButtonContext";
import { GalactapediaProvider } from "./Contexts/GalactapediaContext";
import Footer from "./components/Footer";
import NavBar from "./components/NavBar";
import Arrow from "./components/Arrow";

function App() {
  return (
    <>
      <NavBar className="navbar" />
      <main>
        <ButtonProvider>
          <ReservationProvider>
            <GalactapediaProvider>
              <Outlet />
            </GalactapediaProvider>
          </ReservationProvider>
        </ButtonProvider>
        <Arrow />
      </main>
      <footer>
        <Footer />
      </footer>
    </>
  );
}
export default App;
