import { Outlet } from "react-router-dom";
import { IntroProvider } from "./Contexts/IntroContext";
import { ReservationProvider } from "./Contexts/ReservationContext";
import { ButtonProvider } from "./Contexts/ButtonContext";
import Footer from "./components/Footer";
import "./styles/app.scss";
import NavBar from "./components/NavBar";
import Arrow from "./components/Arrow";

function App() {
  return (
    <IntroProvider>
      <NavBar className="navbar" />
      <main>
        <ButtonProvider>
          <ReservationProvider>
            <Outlet />
          </ReservationProvider>
        </ButtonProvider>
        <Arrow />
      </main>
      <footer>
        <Footer />
      </footer>
      </IntroProvider>
  );
}
export default App;
