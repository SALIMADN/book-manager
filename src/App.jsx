import { Routes, Route, Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import Navbar from './components/Navbar';
import Landing from './pages/Landing';
import Login from './pages/Login';
import Register from './pages/Register';
import BookList from './pages/BookList';
import Favorites from './pages/Favorites';
import Profile from './pages/Profile';

function ProtectedRoute({ children }) {
  const isAuthenticated = useSelector(state => state.auth.isAuthenticated);
  return isAuthenticated ? children : <Navigate to="/login" />;
}

function App() {
  const isAuthenticated = useSelector(state => state.auth.isAuthenticated);

  return (
    <>
      {isAuthenticated && <Navbar />}
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route
          path="/books"
          element={
            <ProtectedRoute>
              <BookList />
            </ProtectedRoute>
          }
        />
        <Route
          path="/favorites"
          element={
            <ProtectedRoute>
              <Favorites />
            </ProtectedRoute>
          }
        />
        <Route
          path="/profile"
          element={
            <ProtectedRoute>
              <Profile />
            </ProtectedRoute>
          }
        />
      </Routes>
    </>
  );
}

export default App;
