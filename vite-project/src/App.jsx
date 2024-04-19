import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import React from 'react';
import Navbar from './components/Navbar';
import Welcome from './pages/Welcome';
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Layout from './components/Layout';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout><Welcome /></Layout>} />
        <Route path="/signin" element={<Layout><SignIn /></Layout>} />
        <Route path="/signup" element={<Layout><SignUp /></Layout>} />
        <Route path="/home" element={<Layout showNavbar={true}><Home /></Layout>} />
        <Route path="/about" element={<Layout showNavbar={true}><About /></Layout>} />
        <Route path="/contact" element={<Layout showNavbar={true}><Contact /></Layout>} />
      </Routes>
    </Router>
  );
};

export default App;
