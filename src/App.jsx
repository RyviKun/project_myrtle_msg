import { BrowserRouter, useNavigate } from "react-router-dom";
import { Route, Routes } from "react-router-dom";
import { StrictMode } from "react";
import "./styles.css";
import Tohome from "./component/Tohome";
import Login from "./page/Login";
import About from "./page/About";
import Description from "./page/Description";
import History from "./page/History";
import Homepage from "./page/Homepage";
import Searchpage from "./page/Searchpage";
import Navbar from "./component/Navbar";

function App() {
  return (
    <StrictMode>
      <BrowserRouter>
        <div className="container">
          <Navbar />
          <Routes>
            <Route exact path="/" element={<Login />} />
            <Route exact path="/homepage" element={<Homepage />} />
            <Route exact path="/homepage/about" element={<About />} />
            <Route exact path="/homepage/searchpage" element={<Searchpage />} />
            <Route
              exact
              path="/homepage/description"
              element={<Description />}
            />
            <Route exact path="/homepage/history" element={<History />} />
          </Routes>
          <Tohome />
        </div>
      </BrowserRouter>
    </StrictMode>
  );
}

export default App;
