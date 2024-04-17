import { Outlet } from "react-router-dom";
import "./styles/app.scss";
import Footer from "./components/Footer";


function App() {
  return (
    <>
<Outlet/>
<footer>
<Footer/>
</footer>
</>
  );
}

export default App;
