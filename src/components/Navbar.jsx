import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

function Navbar() {
  const isAuthenticated = useSelector(state => state.auth.isAuthenticated);
  const user = useSelector(state => state.auth.user);
  const favorites = useSelector(state => state.favorites.items);

  const totalItems = favorites.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <Link to="/" className="navbar-brand">
          📚 Book Haven
        </Link>

        {isAuthenticated && (
          <div className="navbar-links">
            <Link to="/books" className="nav-link">Books</Link>
            <Link to="/favorites" className="nav-link">
              Favorites {totalItems > 0 && <span className="badge">{totalItems}</span>}
            </Link>
            <Link to="/profile" className="nav-link">
              <span className="user-avatar">{user?.name?.charAt(0).toUpperCase()}</span>
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
}

export default Navbar;
