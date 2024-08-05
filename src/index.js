import React from 'react';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter as Router, Route, Routes} from "react-router-dom"
import Home from "./pages/home/index"
import About from "./pages/about/index"
import ErrorPage from "./pages/error/index"
import housing from "./assets/data/housing.json"
import HouseProperties from "./pages/houseProperties/index"

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router >
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        {/* logement/:id / useparams */}
        <Route path="/logements">
          {housing.map(house => <Route key={house.id} path={`/logements/${house.id}`} element={<HouseProperties />} />)}
        </Route>
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </Router>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();