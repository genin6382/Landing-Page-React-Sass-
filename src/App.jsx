import "./scss/main.scss";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Content from  "./components/Content";
import { BrowserRouter as Router, } from 'react-router-dom';

function App() {
  return (
    <>
       <Router>
          <Navbar />
          <Content />
          <Footer />
       </Router>
        
    </>
  )
}

export default App
