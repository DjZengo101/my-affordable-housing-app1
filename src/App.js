import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import ListingsPage from './pages/ListingsPage';
import './App.css';

const App = () => {
  return (
    <Router>
      <div className="App">
        <NavBar />
        <main className="main-content"> {/* Semantic HTML for main content */}
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/listings" element={<ListingsPage />} />
            {/* Add other routes here */}
            <Route path="*" element={<NotFoundPage />} /> {/* Handle 404s gracefully */}
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
};

// Implement a custom 404 component
const NotFoundPage = () => {
  return <h1>Page Not Found</h1>;
};

export default App;
