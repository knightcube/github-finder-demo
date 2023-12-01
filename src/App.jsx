import { Suspense, lazy, useState } from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { GithubProvider } from "./context/github/GithubContext";
import { AlertProvider } from "./context/alert/AlertContext";

// const GithubProvider = lazy(()=> import('./context/github/GithubContext'));
// const AlertProvider = lazy(()=>import ('./context/alert/AlertContext'))
const Navbar = lazy(() => import("./components/layout/Navbar"));
const Footer = lazy(() => import("./components/layout/Footer"));
const Home = lazy(() => import("./pages/Home"));
const About = lazy(() => import("./pages/About"));
const Error404NotFound = lazy(() => import("./pages/Error404NotFound"));
const UserDetail = lazy(() => import("./components/users/UserDetail"));

function App() {
  return (
    <GithubProvider>
      <AlertProvider>
        <Router>
          <div className="flex flex-col justify-between h-screen bg-base-100">
            <Navbar title="GitHub Finder" />
            <main className="container w-full mx-auto px-4 py-12">
              <Suspense fallback={<div>Loading...</div>}>
                <Routes>
                  <Route path="/" element={<Home />}></Route>
                  <Route path="/about" element={<About />}></Route>
                  <Route path="/user/:login" element={<UserDetail />}></Route>
                  <Route
                    path="/notfound"
                    element={<Error404NotFound />}
                  ></Route>
                  <Route path="/*" element={<Error404NotFound />}></Route>
                </Routes>
              </Suspense>
            </main>
            <Footer />
          </div>
        </Router>
      </AlertProvider>
    </GithubProvider>
  );
}

export default App;
