import Header from "./components/Header/index.js";
import Footer from "./components/Footer/index.js";
import "./global.css";
import { BrowserRouter as Router } from "react-router-dom";
import ConfigRoutes from "./ConfigRoutes"
import ErrorBoundary from "./components/ErrorBoundary/index.js";

function App() {
  return (
    <div className='container'>
      <Router basename={process.env.PUBLIC_URL}>
        <ErrorBoundary>
        <Header />        
        <ConfigRoutes/>
        <Footer />
        </ErrorBoundary>
      </Router>
    </div>
  );
}

export default App;
