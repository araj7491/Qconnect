import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';

// Pages
import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import DashboardPage from './pages/DashboardPage';
import StudyGroupsPage from './pages/StudyGroupsPage';
import ForumPage from './pages/ForumPage';
import ProfilePage from './pages/ProfilePage';
import NotFoundPage from './pages/NotFoundPage';

// Public Pages
import PublicStudyGroupsPage from './pages/PublicStudyGroupsPage';
import PublicForumPage from './pages/PublicForumPage';
import PublicResourcesPage from './pages/PublicResourcesPage';

// Layout components
import Layout from './components/layout/Layout';
import ProtectedRoute from './components/auth/ProtectedRoute';

function App() {
  return (
    <AnimatePresence mode="wait">
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="login" element={<LoginPage />} />
          <Route path="register" element={<RegisterPage />} />
          
          {/* Public informational pages */}
          <Route path="study-groups" element={<PublicStudyGroupsPage />} />
          <Route path="forum" element={<PublicForumPage />} />
          <Route path="resources" element={<PublicResourcesPage />} />
          
          {/* Protected routes */}
          <Route path="dashboard" element={
            <ProtectedRoute>
              <DashboardPage />
            </ProtectedRoute>
          } />
          <Route path="app/study-groups" element={
            <ProtectedRoute>
              <StudyGroupsPage />
            </ProtectedRoute>
          } />
          <Route path="app/forum" element={
            <ProtectedRoute>
              <ForumPage />
            </ProtectedRoute>
          } />
          <Route path="profile" element={
            <ProtectedRoute>
              <ProfilePage />
            </ProtectedRoute>
          } />
          
          {/* 404 page */}
          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
    </AnimatePresence>
  );
}

export default App;