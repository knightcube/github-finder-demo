import { useState } from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import Error404NotFound from "./pages/Error404NotFound";
import { GithubProvider } from "./context/github/GithubContext";
import { AlertProvider } from "./context/alert/AlertContext";
import UserDetail from "./components/users/UserDetail";

function App() {
  return (
    <GithubProvider>
      <AlertProvider>
        <Router>
          <div className="flex flex-col justify-between h-screen bg-base-100">
            <Navbar title="GitHub Finder" />
            <main className="container w-full mx-auto px-4 py-12">
              <Routes>
                <Route path="/" element={<Home />}></Route>
                <Route path="/about" element={<About />}></Route>
                <Route path="/user/:login" element={<UserDetail />}></Route>
                <Route path="/notfound" element={<Error404NotFound />}></Route>
                <Route path="/*" element={<Error404NotFound />}></Route>
              </Routes>
            </main>
            <Footer />
          </div>
        </Router>
      </AlertProvider>
    </GithubProvider>
  );
}

export default App;
