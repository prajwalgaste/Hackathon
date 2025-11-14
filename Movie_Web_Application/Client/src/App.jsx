import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";

import ProtectedRoute from "./ProtectedRoute.jsx";
import PublicRoute from "./PublicRoute.jsx";
import AppNavbar from "./components/AppNavbar.jsx";

/* Pages */
/* Pages */
import SignIn from "./pages/SignIn.jsx";
import SignUp from "./pages/SignUp.jsx";
import Home from "./pages/Home.jsx";
import CreateReview from "./pages/CreateReview.jsx";
import EditReview from "./pages/EditReview.jsx";
import MyReviews from "./pages/MyReviews.jsx";
import AllReviews from "./pages/AllReviews.jsx";
import SharedReviews from "./pages/SharedReviews.jsx";
import ShareReview from "./pages/ShareReview.jsx";
import EditProfile from "./pages/EditProfile.jsx";
import ChangePassword from "./pages/ChangePassword.jsx";


function App() {
  const isAuth = localStorage.getItem("auth");

  return (
    <>
      {isAuth && <AppNavbar />}

      <Routes>
        <Route path="/" element={<Navigate to={isAuth ? "/home" : "/signup"} replace />} />

        {/* PUBLIC PAGES */}
        <Route path="/signin" element={<PublicRoute><SignIn /></PublicRoute>} />
        <Route path="/signup" element={<PublicRoute><SignUp /></PublicRoute>} />

        {/* PROTECTED PAGES */}
        <Route path="/home" element={
          <ProtectedRoute><Home /></ProtectedRoute>
        } />

        <Route path="/create-review" element={
          <ProtectedRoute><CreateReview /></ProtectedRoute>
        } />

        <Route path="/edit-review/:id" element={
          <ProtectedRoute><EditReview /></ProtectedRoute>
        } />

        <Route path="/my-reviews" element={
          <ProtectedRoute><MyReviews /></ProtectedRoute>
        } />

        <Route path="/all-reviews" element={
          <ProtectedRoute><AllReviews /></ProtectedRoute>
        } />

        <Route path="/shared-reviews" element={
          <ProtectedRoute><SharedReviews /></ProtectedRoute>
        } />

        <Route path="/share-review" element={
          <ProtectedRoute><ShareReview /></ProtectedRoute>
        } />

        <Route path="/edit-profile" element={
          <ProtectedRoute><EditProfile /></ProtectedRoute>
        } />

        <Route path="/change-password" element={
          <ProtectedRoute><ChangePassword /></ProtectedRoute>
        } />
      </Routes>
    </>
  );
}

export default App;
