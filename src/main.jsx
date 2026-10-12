import React from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import './styles.css'
import Layout from './Layout.jsx'
import Home from './pages/Home.jsx'
import Hr1 from './pages/Hr1.jsx'
import Insights from './pages/Insights.jsx'

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="/hr1" element={<Hr1 />} />
        {/* Page renamed: /resources is now /insights */}
        <Route path="/insights" element={<Insights />} />
        {/* Old URL still works: it redirects to the new one */}
        <Route path="/resources" element={<Navigate to="/insights" replace />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Route>
    </Routes>
  </BrowserRouter>
)
