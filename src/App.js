import Header from "./components/Header/index.js";
import Footer from "./components/Footer/index.js";
import "./global.css";
import { BrowserRouter as Router } from "react-router-dom";
import ConfigRoutes from "./ConfigRoutes";

function App() {
  return (
    <div className='container'>
      <Router basename={process.env.PUBLIC_URL}>
        <Header />
        <ConfigRoutes />
        <Footer />
      </Router>
    </div>
  );
}

export default App;
