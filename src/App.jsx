import React from 'react';
import { db } from './config/firebase.config';
import { getDocs, collection } from 'firebase/firestore';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Dashboard from './pages/Dashboard/Dashboard';
import Home from './pages/Home/Home';
import Search from './pages/Search/Search';
import Photography from './pages/Photography/Photography';
import Blog from "./pages/Blog/Blog";
import LogIn from './pages/LogIn/LogIn';

const App = () => {
  
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route exact path={"/login"} element={<LogIn />} />
          <Route exact path={"/"} element={<Home />} />
          <Route exact path={"/dashboard"} element={<Dashboard />} />
          <Route exact path={"/blog"} element={<Blog />} />
          <Route exact path={"/search"} element={<Search />} />
          <Route exact path={"/foodieinsta"} element={<Photography />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App