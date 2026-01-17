import { useSelector, useDispatch } from 'react-redux';
import { removeFromFavorites, incrementQuantity, decrementQuantity } from '../redux/favoritesSlice';

function Favorites() {
  const favorites = useSelector(state => state.favorites.items);
  const dispatch = useDispatch();

  const totalBooks = favorites.reduce((sum, item) => sum + item.quantity, 0);
  const totalPrice = favorites.reduce((sum, item) => sum + (item.price * item.quantity), 0);

  const handleRemove = (id) => {
    dispatch(removeFromFavorites(id));
  };

  const handleIncrement = (id) => {
    dispatch(incrementQuantity(id));
  };

  const handleDecrement = (id) => {
    dispatch(decrementQuantity(id));
  };

  if (favorites.length === 0) {
    return (
      <div className="empty-favorites">
        <div className="empty-icon">📚</div>
        <h2>Your favorites list is empty</h2>
        <p>Start adding books you love!</p>
      </div>
    );
  }

  return (
    <div className="favorites-container">
      <h1>My Favorites</h1>
      <p className="page-subtitle">Books you love</p>

      <div className="favorites-summary">
        <div className="summary-item">
          <span className="summary-label">Total Books:</span>
          <span className="summary-value">{totalBooks}</span>
        </div>
        <div className="summary-item">
          <span className="summary-label">Total Price:</span>
          <span className="summary-value">${totalPrice.toFixed(2)}</span>
        </div>
      </div>

      <div className="favorites-list">
        {favorites.map(book => (
          <div key={book.id} className="favorite-item">
            {book.cover && (
              <img src={book.cover} alt={book.title} className="favorite-cover" />
            )}
            <div className="favorite-details">
              <h3>{book.title}</h3>
              <p className="favorite-author">{book.author}</p>
              <p className="favorite-price">${book.price}</p>
            </div>

            <div className="favorite-actions">
              <div className="quantity-controls">
                <button onClick={() => handleDecrement(book.id)} className="btn-quantity">-</button>
                <span className="quantity">{book.quantity}</span>
                <button onClick={() => handleIncrement(book.id)} className="btn-quantity">+</button>
              </div>
              <button onClick={() => handleRemove(book.id)} className="btn-remove">Remove</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Favorites;
