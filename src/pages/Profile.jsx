import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { updateProfile, logout } from '../redux/authSlice';

function Profile() {
  const user = useSelector(state => state.auth.user);
  const favorites = useSelector(state => state.favorites.items);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [isEditing, setIsEditing] = useState(false);
  const [name, setName] = useState(user?.name || '');
  const [email, setEmail] = useState(user?.email || '');

  const handleSave = (e) => {
    e.preventDefault();
    dispatch(updateProfile({ name, email }));
    setIsEditing(false);
  };

  const handleLogout = () => {
    dispatch(logout());
    navigate('/');
  };

  const totalBooks = favorites.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <div className="profile-container">
      <h1>My Profile</h1>

      <div className="profile-content">
        <div className="profile-card">
          <div className="profile-header">
            <div className="profile-avatar">{user?.name?.charAt(0).toUpperCase()}</div>
            <h2>{user?.name}</h2>
          </div>

          {!isEditing ? (
            <div className="profile-info">
              <div className="info-item">
                <label>Name</label>
                <p>{user?.name}</p>
              </div>
              <div className="info-item">
                <label>Email</label>
                <p>{user?.email}</p>
              </div>
              <button onClick={() => setIsEditing(true)} className="btn-secondary">
                Edit Profile
              </button>
            </div>
          ) : (
            <form onSubmit={handleSave} className="profile-form">
              <div className="form-group">
                <label>Name</label>
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                />
              </div>
              <div className="form-group">
                <label>Email</label>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>
              <div className="form-actions">
                <button type="submit" className="btn-primary">Save</button>
                <button type="button" onClick={() => setIsEditing(false)} className="btn-secondary">
                  Cancel
                </button>
              </div>
            </form>
          )}
        </div>

        <div className="profile-stats">
          <h3>Your Reading Stats</h3>
          <div className="stats-grid">
            <div className="stat-card">
              <div className="stat-value">{favorites.length}</div>
              <div className="stat-label">Favorite Books</div>
            </div>
            <div className="stat-card">
              <div className="stat-value">{totalBooks}</div>
              <div className="stat-label">Total Items</div>
            </div>
          </div>
        </div>

        <button onClick={handleLogout} className="btn-logout">
          Logout
        </button>
      </div>
    </div>
  );
}

export default Profile;
