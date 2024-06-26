/* eslint-disable no-unused-vars */
// src/App.js
import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Link, Navigate, useNavigate } from 'react-router-dom';
import { FaTachometerAlt, FaEnvelope, FaUser, FaUsers, FaSignOutAlt } from 'react-icons/fa';
import PropTypes from 'prop-types'; // Import PropTypes
import Dashboard from './components/Dashboard';
import Followers from './components/Followers';
import Message from './components/Message';
import Profile from './components/Profile';
import Login from './components/Login'; // Import your Login component

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false); // State for authentication
  const [isOpen, setIsOpen] = useState(false); // State for mobile menu

  const handleLogin = () => {
    setIsAuthenticated(true); // Set user as authenticated upon successful login
  };

  const handleLogout = () => {
    setIsAuthenticated(false); // Set user as unauthenticated upon logout
  };

  return (
    <Router>
      <nav className="bg-black bg-opacity-70 backdrop-blur-lg p-4">
        <div className="container mx-auto flex justify-between items-center">
          <div className="text-white text-xl font-bold">
            SocioX
          </div>
          <div className="hidden md:flex space-x-4 items-center">
            <NavItem to="/dashboard" label="Dashboard" icon={<FaTachometerAlt />} />
            <NavItem to="/messages" label="Messages" icon={<FaEnvelope />} />
            <NavItem to="/profile" label="Profile" icon={<FaUser />} />
            <NavItem to="/followers" label="Followers" icon={<FaUsers />} />
            {isAuthenticated ? (
              <LogoutButton onLogout={handleLogout} />
            ) : (
              <NavItem to="/login" label="Login" icon={<FaSignOutAlt />} />
            )}
          </div>
          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)} className="text-white">
              ☰
            </button>
          </div>
        </div>
        {isOpen && (
          <div className="md:hidden space-y-4 mt-4">
            <NavItem to="/dashboard" label="Dashboard" icon={<FaTachometerAlt />} />
            <NavItem to="/messages" label="Messages" icon={<FaEnvelope />} />
            <NavItem to="/profile" label="Profile" icon={<FaUser />} />
            <NavItem to="/followers" label="Followers" icon={<FaUsers />} />
            {isAuthenticated ? (
              <LogoutButton onLogout={handleLogout} />
            ) : (
              <NavItem to="/login" label="Login" icon={<FaSignOutAlt />} />
            )}
          </div>
        )}
      </nav>
      <Routes>
        <Route path="/dashboard" element={isAuthenticated ? <Dashboard /> : <Navigate to="/login" />} />
        <Route path="/messages" element={isAuthenticated ? <Message /> : <Navigate to="/login" />} />
        <Route path="/profile" element={isAuthenticated ? <Profile /> : <Navigate to="/login" />} />
        <Route path="/followers" element={isAuthenticated ? <Followers /> : <Navigate to="/login" />} />
        <Route path="/login" element={<Login onLogin={handleLogin} />} />
        <Route path="/" element={<Navigate to={isAuthenticated ? "/dashboard" : "/login"} />} />
      </Routes>
    </Router>
  );
}

function NavItem({ to, label, icon }) {
  return (
    <Link to={to} className="flex items-center space-x-2 text-white">
      {icon}
      <span>{label}</span>
    </Link>
  );
}

// Adding propTypes validation
NavItem.propTypes = {
  to: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  icon: PropTypes.element.isRequired
};

function LogoutButton({ onLogout }) {
  const navigate = useNavigate();

  const handleLogoutClick = () => {
    onLogout();
    navigate('/login'); // Redirect to the login page
  };

  return (
    <button onClick={handleLogoutClick} className="flex items-center space-x-2 text-white">
      <FaSignOutAlt />
      <span>Logout</span>
    </button>
  );
}

// Adding propTypes validation for LogoutButton
LogoutButton.propTypes = {
  onLogout: PropTypes.func.isRequired
};

export default App;
