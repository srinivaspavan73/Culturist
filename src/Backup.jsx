return (
  <div className="container">
    {showLanding ? (
      <LandingPage onExplorePlace={handleExplorePlace} />
    ) : (
      <>
        <header className="header">
          <h1 className="title">
            🌏 Culturist
          </h1>
          <p className="subtitle">Explore India Seasonally - Discover the perfect time to visit Indian cities</p>
          <button 
            className="back-to-home"
            onClick={() => setShowLanding(true)}
          >
            ← Back to Home
          </button>
        </header>

        {/* Filter Section */}
        <div className="filter-section">
          <div className="filter-step">
            <h3 className="step-title">1. Select State</h3>
            <div className="button-grid">
              {Object.keys(travelData).map(state => (
                <button
                  key={state}
                  className={`filter-button ${selectedState === state ? 'selected' : ''}`}
                  onClick={() => handleStateChange(state)}
                >
                  {state}
                </button>
              ))}
            </div>
          </div>

          {selectedState && (
            <div className="filter-step">
              <h3 className="step-title">2. Select City</h3>
              <div className="button-grid">
                {availableCities.map(city => (
                  <button
                    key={city}
                    className={`filter-button ${selectedCity === city ? 'selected' : ''}`}
                    onClick={() => handleCityChange(city)}
                  >
                    {city}
                  </button>
                ))}
              </div>
            </div>
          )}

          {selectedCity && (
            <div className="filter-step">
              <h3 className="step-title">3. Select Season</h3>
              <div className="button-grid">
                {seasons.map(season => (
                  <button
                    key={season}
                    className={`filter-button ${selectedSeason === season ? 'selected' : ''}`}
                    onClick={() => setSelectedSeason(season)}
                  >
                    {season}
                  </button>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Results Section */}
        {selectedState && selectedCity && selectedSeason && (
          <div className="results-section">
            {currentData ? (
              <>
                <div className="destination-header">
                  <h2 className="destination-title">
                    {selectedCity}, {selectedState} in {selectedSeason}
                  </h2>
                  <p className="destination-desc">{currentData.description}</p>
                </div>

                <div className="cards-grid">
                  {/* Festivals Card */}
                  <div className="card">
                    <div className="card-header">
                      <h3 className="card-title">🎉 Festivals</h3>
                      <button
                        className="like-button"
                        onClick={() => handleLike('festivals')}
                      >
                        ❤️ {likes[`${selectedState}-${selectedCity}-${selectedSeason}-festivals`] || 0}
                      </button>
                    </div>
                    <div className="card-content">
                      {currentData.festivals.map((festival, index) => (
                        <span key={index} className="tag">{festival}</span>
                      ))}
                    </div>
                  </div>

                  {/* Food Card */}
                  <div className="card">
                    <div className="card-header">
                      <h3 className="card-title">🍽️ Local Cuisine</h3>
                      <button
                        className="like-button"
                        onClick={() => handleLike('food')}
                      >
                        ❤️ {likes[`${selectedState}-${selectedCity}-${selectedSeason}-food`] || 0}
                      </button>
                    </div>
                    <div className="card-content">
                      {currentData.food.map((item, index) => (
                        <span key={index} className="tag">{item}</span>
                      ))}
                    </div>
                  </div>

                  {/* Monuments Card */}
                  <div className="card">
                    <div className="card-header">
                      <h3 className="card-title">🏛️ Must Visit</h3>
                      <button
                        className="like-button"
                        onClick={() => handleLike('monuments')}
                      >
                        ❤️ {likes[`${selectedState}-${selectedCity}-${selectedSeason}-monuments`] || 0}
                      </button>
                    </div>
                    <div className="card-content">
                      {currentData.monuments.map((monument, index) => (
                        <span key={index} className="tag">{monument}</span>
                      ))}
                    </div>
                  </div>

                  {/* Lifestyle Card */}
                  <div className="card full-width-card">
                    <div className="card-header">
                      <h3 className="card-title">🌟 Culture & Lifestyle</h3>
                      <button
                        className="like-button"
                        onClick={() => handleLike('lifestyle')}
                      >
                        ❤️ {likes[`${selectedState}-${selectedCity}-${selectedSeason}-lifestyle`] || 0}
                      </button>
                    </div>
                    <div className="card-content">
                      <p className="lifestyle-text">{currentData.lifestyle}</p>
                    </div>
                  </div>
                </div>

                {/* Comments Section */}
                <div className="comments-section">
                  <h3 className="comments-title">💬 Travel Tips & Comments</h3>
                  
                  <div className="comment-form">
                    <textarea
                      value={newComment}
                      onChange={(e) => setNewComment(e.target.value)}
                      placeholder={`Share your experience or tips for ${selectedCity} in ${selectedSeason}...`}
                      className="comment-input"
                      rows="4"
                    />
                    <button onClick={handleCommentSubmit} className="submit-button">
                      Post Comment
                    </button>
                  </div>

                  <div className="comments-list">
                    {comments
                      .filter(comment => 
                        comment.destination === `${selectedCity}, ${selectedState}` && 
                        comment.season === selectedSeason
                      )
                      .map(comment => (
                        <div key={comment.id} className="comment-item">
                          <div className="comment-header">
                            <span className="comment-dest">{comment.destination} - {comment.season}</span>
                            <span className="comment-time">{comment.timestamp}</span>
                          </div>
                          <p className="comment-text">{comment.text}</p>
                        </div>
                      ))}
                    
                    {comments.filter(comment => 
                      comment.destination === `${selectedCity}, ${selectedState}` && 
                      comment.season === selectedSeason
                    ).length === 0 && (
                      <p className="no-comments">
                        Be the first to share your experience of {selectedCity} in {selectedSeason}!
                      </p>
                    )}
                  </div>
                </div>
              </>
            ) : (
              <div className="no-data-message">
                <h3 className="no-data-title">No seasonal data available</h3>
                <p>
                  In {selectedCity}, {selectedState} during {selectedSeason}, there are no season-specific festivals or detailed cultural information available.
                </p>
                <p className="suggestion">
                  Try visiting in <strong>Winter</strong> or <strong>Monsoon</strong> for the best cultural experiences!
                </p>
              </div>
            )}
          </div>
        )}

        {!selectedState && (
          <div className="welcome-section">
            <div className="welcome-card">
              <h2>🌟 Welcome to Culturist</h2>
              <p>Discover the perfect time to explore India's rich cultural heritage. Select a state above to begin your journey through festivals, food, monuments, and local lifestyles.</p>
              <div className="features">
                <div className="feature">
                  <span>🎭</span>
                  <span>Season-specific festivals</span>
                </div>
                <div className="feature">
                  <span>🍛</span>
                  <span>Local cuisine recommendations</span>
                </div>
                <div className="feature">
                  <span>🏛️</span>
                  <span>Must-visit monuments</span>
                </div>
                <div className="feature">
                  <span>🏞️</span>
                  <span>Cultural insights & lifestyle</span>
                </div>
              </div>
            </div>
          </div>
        )}
      </>
    )}
  </div>
);