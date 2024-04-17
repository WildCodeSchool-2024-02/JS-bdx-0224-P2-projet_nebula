import { Outlet } from "react-router-dom";
import "./styles/app.scss";
import Footer from "./components/Footer";
import NavBar from "./components/NavBar";


function App() {
  return (
    <>
    <NavBar/>
<Outlet/>
<footer>
<Footer/>
</footer>
</>
  );
}

export default App;
