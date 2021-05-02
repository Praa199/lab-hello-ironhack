// import logo from "./logo.svg";
import "./App.css";

import Footer from "./components/Footer.js";
import Header from "./components/Header";

function App() {
  return (
    <div>
      <div className="App">
        <nav className="App-nav">
          <div>
            <img src="/images/ironhack-logo.svg" alt=""></img>
          </div>
          <div>
            <img src="/images/menu-top.svg" alt=""></img>
          </div>
        </nav>
        <Header />
      </div>
      <Footer />
    </div>
  );
}

export default App;
