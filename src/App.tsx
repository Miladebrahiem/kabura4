import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { Layout } from './components/layout/Layout';
import { WordPressPage } from './pages/WordPressPage';

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Navigate to="/home" replace />} />
        <Route path="/:uri" element={<WordPressPage />} />
      </Routes>
    </Layout>
  );
}

export default App;