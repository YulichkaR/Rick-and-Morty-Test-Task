import React from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Layout } from "./components/common/Layout";
import { Characters } from "./components/Characters";
import Episodes from "./components/Episodes/Episodes";
import Locations from "./components/Locations/Locations";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/Rick-and-Morty-Test-Task" element={<Layout />}>
          <Route index element={<Characters />} />
          <Route
            path="/Rick-and-Morty-Test-Task/episodes"
            element={<Episodes />}
          />
          <Route
            path="/Rick-and-Morty-Test-Task/locations"
            element={<Locations />}
          />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
