import React from 'react';
import { Route, Routes, Link } from 'react-router-dom';
import Home from './pages/Home';
import TacticalBoardPage from './pages/TacticalBoardPage';
import TrainingPrograms from './pages/TrainingPrograms';
import DashboardPage from './pages/DashboardPage';
import About from './pages/About';
import Contact from './pages/Contact';
import SuccessStories from './pages/SuccessStories';

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/training-programs" element={<TrainingPrograms />} />
      <Route path="/success-stories" element={<SuccessStories />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/tactical-board" element={<TacticalBoardPage />} />
      <Route path="/dashboard" element={<DashboardPage />} />
      {/* Add a catch-all route for 404 page */}
      <Route path="*" element={
        <div className="flex flex-col items-center justify-center min-h-[70vh] p-8 text-center">
          <h1 className="text-6xl font-bold text-primary mb-4">404</h1>
          <p className="text-2xl mb-8">Page not found</p>
          <Link to="/" className="bg-primary text-white px-6 py-2 rounded-lg hover:bg-opacity-90 transition duration-300">
            Return Home
          </Link>
        </div>
      } />
    </Routes>
  );
};

export default AppRoutes;