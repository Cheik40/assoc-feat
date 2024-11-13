import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/header/Header";
import Home from "./pages/Home";
import Information from "./pages/Information";
import Projects from "./pages/Projects";

const App: React.FC = () => {
    return (
        <Router>
            <Header />
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/information' element={<Information />} />
                <Route path='/projects' element={<Projects />} />
            </Routes>
        </Router>
    );
};

export default App;
