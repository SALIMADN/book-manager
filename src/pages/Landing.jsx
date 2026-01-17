import { Link } from 'react-router-dom';

function Landing() {
  return (
    <div className="landing-page">
      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-content">
          <div className="hero-text">
            <div className="hero-badge">Welcome to Book Haven</div>
            <h1 className="hero-title">
              Your Personal
              <span className="title-highlight"> Book Collection</span>
              <br />
              Starts Here
            </h1>
            <p className="hero-description">
              Discover amazing books, curate your favorites, and build your dream library.
              Join thousands of book lovers today.
            </p>
            <div className="hero-buttons">
              <Link to="/register" className="btn-primary-large">
                Start Your Journey
                <span className="btn-arrow">→</span>
              </Link>
              <Link to="/login" className="btn-ghost">
                Sign In
              </Link>
            </div>
            <div className="hero-stats">
              <div className="stat-item">
                <div className="stat-number">1000+</div>
                <div className="stat-label">Books</div>
              </div>
              <div className="stat-divider"></div>
              <div className="stat-item">
                <div className="stat-number">500+</div>
                <div className="stat-label">Readers</div>
              </div>
              <div className="stat-divider"></div>
              <div className="stat-item">
                <div className="stat-number">50+</div>
                <div className="stat-label">Genres</div>
              </div>
            </div>
          </div>

          <div className="hero-visual">
            <div className="book-stack">
              <div className="book book-1">
                <div className="book-spine"></div>
                <div className="book-cover">
                  <div className="book-title">Fiction</div>
                </div>
              </div>
              <div className="book book-2">
                <div className="book-spine"></div>
                <div className="book-cover">
                  <div className="book-title">Romance</div>
                </div>
              </div>
              <div className="book book-3">
                <div className="book-spine"></div>
                <div className="book-cover">
                  <div className="book-title">Mystery</div>
                </div>
              </div>
            </div>
            <div className="floating-hearts">
              <span className="heart heart-1">❤️</span>
              <span className="heart heart-2">💜</span>
              <span className="heart heart-3">💗</span>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="features-section">
        <div className="section-header">
          <h2 className="section-title">Why Choose Book Haven?</h2>
          <p className="section-subtitle">Everything you need to manage your reading life</p>
        </div>

        <div className="features-grid">
          <div className="feature-box">
            <div className="feature-icon-wrapper">
              <span className="feature-emoji">📚</span>
            </div>
            <h3 className="feature-title">Vast Collection</h3>
            <p className="feature-description">
              Access thousands of books across all genres. From classics to contemporary bestsellers.
            </p>
          </div>

          <div className="feature-box">
            <div className="feature-icon-wrapper">
              <span className="feature-emoji">❤️</span>
            </div>
            <h3 className="feature-title">Save & Organize</h3>
            <p className="feature-description">
              Create your personal favorites list and organize books exactly how you want.
            </p>
          </div>

          <div className="feature-box">
            <div className="feature-icon-wrapper">
              <span className="feature-emoji">✨</span>
            </div>
            <h3 className="feature-title">Track Progress</h3>
            <p className="feature-description">
              Keep track of your reading journey with personalized statistics and insights.
            </p>
          </div>

          <div className="feature-box">
            <div className="feature-icon-wrapper">
              <span className="feature-emoji">🎯</span>
            </div>
            <h3 className="feature-title">Easy to Use</h3>
            <p className="feature-description">
              Beautiful and intuitive interface designed for book lovers by book lovers.
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section">
        <div className="cta-content">
          <h2 className="cta-title">Ready to Start Your Reading Adventure?</h2>
          <p className="cta-description">Join our community and discover your next favorite book today</p>
          <Link to="/register" className="btn-primary">
            Create Free Account
            <span className="btn-arrow">→</span>
          </Link>
        </div>
      </section>
    </div>
  );
}

export default Landing;
