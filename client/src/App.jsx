import { Outlet } from "react-router-dom";
import { IntroProvider } from "./Contexts/IntroContext";
import { ReservationProvider } from "./Contexts/ReservationContext";
import { ButtonProvider } from "./Contexts/ButtonContext";
import { GalactapediaProvider } from "./Contexts/GalactapediaContext";
import { ShipProvider } from "./Contexts/ShipContext";

import Footer from "./components/Footer";
import NavBar from "./components/NavBar";
import Arrow from "./components/Arrow";

function App() {
  return (
    <>
      <IntroProvider>
        <NavBar />
        <main>
          <ButtonProvider>
            <ReservationProvider>
              <GalactapediaProvider>
                <ShipProvider>
                  <Outlet />
                </ShipProvider>
              </GalactapediaProvider>
            </ReservationProvider>
          </ButtonProvider>
          <Arrow />
        </main>
      </IntroProvider>
      <footer>
        <Footer />
      </footer>
    </>
  );
}
export default App;
