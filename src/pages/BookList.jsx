import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addToFavorites } from '../redux/favoritesSlice';

function BookList() {
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [imageLoadingStates, setImageLoadingStates] = useState({});
  const [imageErrors, setImageErrors] = useState({});
  const dispatch = useDispatch();
  const favorites = useSelector(state => state.favorites.items);

  useEffect(() => {
    // Fetch books from Open Library API
    fetch('https://openlibrary.org/subjects/fiction.json?limit=20')
      .then(response => response.json())
      .then(data => {
        const formattedBooks = data.works.map(work => ({
          id: work.key,
          title: work.title,
          author: work.authors?.[0]?.name || 'Unknown Author',
          price: (Math.random() * 30 + 10).toFixed(2), // Random price for demo
          cover: work.cover_id
            ? `https://covers.openlibrary.org/b/id/${work.cover_id}-M.jpg`
            : null,
        }));
        setBooks(formattedBooks);
        setLoading(false);
      })
      .catch(() => {
        setLoading(false);
      });
  }, []);

  const handleAddToFavorites = (book) => {
    dispatch(addToFavorites(book));
  };

  const isInFavorites = (bookId) => {
    return favorites.some(item => item.id === bookId);
  };

  const handleImageLoad = (bookId) => {
    setImageLoadingStates(prev => ({ ...prev, [bookId]: false }));
  };

  const handleImageError = (bookId) => {
    setImageLoadingStates(prev => ({ ...prev, [bookId]: false }));
    setImageErrors(prev => ({ ...prev, [bookId]: true }));
  };

  if (loading) {
    return <div className="loading">Loading books...</div>;
  }

  return (
    <div className="book-list-container">
      <h1>Discover Books</h1>
      <p className="page-subtitle">Explore our collection and add your favorites</p>

      <div className="books-grid">
        {books.map(book => (
          <div key={book.id} className="book-card">
            <div className="book-cover-wrapper">
              {book.cover && !imageErrors[book.id] ? (
                <>
                  {imageLoadingStates[book.id] !== false && (
                    <div className="book-cover-loading">
                      <div className="spinner"></div>
                    </div>
                  )}
                  <img 
                    src={book.cover} 
                    alt={book.title} 
                    className={`book-cover ${imageLoadingStates[book.id] === false ? 'loaded' : 'loading'}`}
                    onLoad={() => handleImageLoad(book.id)}
                    onError={() => handleImageError(book.id)}
                  />
                </>
              ) : (
                <div className="book-cover-fallback">
                  <span className="fallback-icon">📚</span>
                  <span className="fallback-text">{book.title}</span>
                </div>
              )}
            </div>
            <div className="book-info">
              <h3>{book.title}</h3>
              <p className="book-author">{book.author}</p>
              <p className="book-price">${book.price}</p>
              <button
                onClick={() => handleAddToFavorites(book)}
                className={isInFavorites(book.id) ? 'btn-in-favorites' : 'btn-add-favorite'}
                disabled={isInFavorites(book.id)}
              >
                {isInFavorites(book.id) ? '✓ In Favorites' : '+ Add to Favorites'}
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default BookList;
