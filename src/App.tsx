// App.tsx
import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { store } from './store/store';
import Home from './components/Home';
import './fonts.css';
import Header from './components/Header';
import Construction from './components/Construction';

const App = () => {
  return (
    <Provider store={store}>
      <Router>
        <div className="flex flex-col min-h-screen">
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/construction" element={<Construction />} />
          </Routes>
        </div>
      </Router>
    </Provider>
  );
};

export default App;
