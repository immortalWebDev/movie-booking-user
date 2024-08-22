import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import AppRouter from './components/Routes/AppRouter';
import MaintenancePage from './components/MaintenancePage'; // Import the MaintenancePage component
import './App.css';

const App = () => {
  const isMaintenanceMode = import.meta.env.VITE_MAINTENANCE_MODE === 'true';

  return (
    <Router>
      {isMaintenanceMode ? (
        <MaintenancePage />
      ) : (
        <>
          <Header />
          <AppRouter />
          <Footer />
        </>
      )}
    </Router>
  );
}

export default App;
