import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import AppRouter from './components/Routes/AppRouter';
import MaintenancePage from './components/MaintainancePage/MaintainancePage';
import './App.css';

const App = () => {
  const isMaintenanceMode = false;

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
