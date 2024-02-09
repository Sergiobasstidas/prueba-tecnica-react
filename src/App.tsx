import Home from "./views/Home.jsx";
import Navbar from "./components/Navbar.tsx";
import Favoritos from "./views/Favoritos.jsx";
import Provider from "./context/MyContext.tsx";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <Provider>
      <Navbar />
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/favoritos" element={<Favoritos />} />
        </Routes>
      </Router>
    </Provider>
  );
};

export default App;
