import React, { useState, useEffect, useMemo } from 'react';

const Culturist = ({ 
  initialState = '', 
  initialCity = '', 
  initialSeason = '', 
  cityData = null,
  onBack 
}) => {
  // const [selectedState, setSelectedState] = useState('');
  // const [selectedCity, setSelectedCity] = useState('');
  // const [selectedSeason, setSelectedSeason] = useState('');
  const [likes, setLikes] = useState({});
  const [comments, setComments] = useState([]);
  const [newComment, setNewComment] = useState('');

  const [selectedState, setSelectedState] = useState(initialState);
  const [selectedCity, setSelectedCity] = useState(initialCity);
  const [selectedSeason, setSelectedSeason] = useState(initialSeason);

  // Load data from localStorage on component mount
  useEffect(() => {
    const savedLikes = JSON.parse(localStorage.getItem('culturist-likes') || '{}');
    const savedComments = JSON.parse(localStorage.getItem('culturist-comments') || '[]');
    setLikes(savedLikes);
    setComments(savedComments);
  }, []);

  // Save to localStorage whenever likes or comments change
  useEffect(() => {
    localStorage.setItem('culturist-likes', JSON.stringify(likes));
  }, [likes]);

  useEffect(() => {
    localStorage.setItem('culturist-comments', JSON.stringify(comments));
  }, [comments]);

  // Static data for Indian states, cities, and seasonal information
  const travelData = {
    Maharashtra: {
      cities: {
        Mumbai: {
          Winter: {
            festivals: ['Ganesh Chaturthi', 'Navratri', 'Christmas Celebrations'],
            food: ['Vada Pav', 'Pav Bhaji', 'Bhel Puri', 'Misal Pav'],
            monuments: ['Marine Drive', 'Gateway of India', 'Chhatrapati Shivaji Terminus', 'Elephanta Caves'],
            lifestyle: 'Fast-paced urban culture with friendly locals. The city never sleeps, offering vibrant nightlife and bustling markets.',
            description: 'Winter is the perfect time to explore Mumbai with pleasant weather and clear skies.'
          },
          Monsoon: {
            festivals: ['Teej', 'Gokulashtami'],
            food: ['Hot Bhajias', 'Masala Chai', 'Corn Bhel'],
            monuments: ['Hanging Gardens', 'Juhu Beach', 'Sanjay Gandhi National Park'],
            lifestyle: 'Monsoon brings a romantic charm to the city. People enjoy street food and the lush greenery.',
            description: 'Experience Mumbai during monsoons with dramatic weather and refreshing rains.'
          }
        },
        Pune: {
          Winter: {
            festivals: ['Pune Festival', 'Ganesh Chaturthi', 'Diwali'],
            food: ['Puran Poli', 'Misal Pav', 'Mastani', 'Bhakarwadi'],
            monuments: ['Shaniwar Wada', 'Aga Khan Palace', 'Sinhagad Fort'],
            lifestyle: 'Cultural hub with a blend of tradition and modernity. Known for its educational institutions and pleasant weather.',
            description: 'Winter offers perfect weather for exploring Pune\'s historical sites and cultural attractions.'
          },
          Summer: {
            festivals: ['Gudi Padwa', 'Ram Navami'],
            food: ['Kulfi', 'Lassi', 'Watermelon Juice'],
            monuments: ['Parvati Hill', 'Pune University', 'Koregaon Park'],
            lifestyle: 'Summer brings outdoor cafes and evening gatherings. People prefer air-conditioned malls and gardens.',
            description: 'Though warm, summer in Pune offers vibrant outdoor activities in the evenings.'
          }
        },
        Aurangabad: {
          Winter: {
            festivals: ['Ellora-Ajanta Festival', 'Diwali', 'Makar Sankranti'],
            food: ['Naan Khaliya', 'Tahri', 'Sheermal', 'Mutton Biryani'],
            monuments: ['Ajanta Caves', 'Ellora Caves', 'Bibi Ka Maqbara', 'Daulatabad Fort'],
            lifestyle: 'Rich historical heritage with warm hospitality. Known for its architectural marvels and Mughal influence.',
            description: 'Winter is ideal for exploring the UNESCO World Heritage sites with comfortable weather.'
          }
        }
      }
    },
    Rajasthan: {
      cities: {
        Jaipur: {
          Winter: {
            festivals: ['Desert Festival', 'Diwali', 'Teej', 'Makar Sankranti'],
            food: ['Dal Baati Churma', 'Ghewar', 'Laal Maas', 'Kachori'],
            monuments: ['Hawa Mahal', 'City Palace', 'Amber Fort', 'Jantar Mantar'],
            lifestyle: 'Royal heritage with vibrant colors everywhere. Known for handicrafts, jewelry, and warm hospitality.',
            description: 'Winter is the best time to explore the Pink City with pleasant days and cool nights.'
          },
          Summer: {
            festivals: ['Gangaur', 'Akshaya Tritiya'],
            food: ['Kulfi', 'Lassi', 'Sattu Drink'],
            monuments: ['Nahargarh Fort', 'Jaigarh Fort', 'Albert Hall Museum'],
            lifestyle: 'Summer brings early morning and late evening activities. People prefer shaded markets and indoor attractions.',
            description: 'Though hot, summer offers fewer crowds and better deals on accommodations.'
          }
        },
        Udaipur: {
          Winter: {
            festivals: ['Mewar Festival', 'Diwali', 'World Music Festival'],
            food: ['Dal Baati Churma', 'Gatte ki Sabzi', 'Ker Sangri', 'Malpua'],
            monuments: ['City Palace', 'Lake Pichola', 'Jag Mandir', 'Saheliyon Ki Bari'],
            lifestyle: 'Romantic city with beautiful lakes and palaces. Known for its artistic heritage and peaceful ambiance.',
            description: 'Winter transforms Udaipur into a fairy tale with perfect weather for boat rides and palace visits.'
          },
          Monsoon: {
            festivals: ['Teej', 'Raksha Bandhan'],
            food: ['Hot Pakoras', 'Masala Chai', 'Corn'],
            monuments: ['Monsoon Palace', 'Fateh Prakash Palace', 'Bagore Ki Haveli'],
            lifestyle: 'Monsoon brings lush greenery and romantic weather. Perfect for couples and nature lovers.',
            description: 'Experience the Venice of the East during monsoons with overflowing lakes and green landscapes.'
          }
        },
        Jodhpur: {
          Winter: {
            festivals: ['Rajasthan International Folk Festival', 'Diwali', 'Makar Sankranti'],
            food: ['Mirchi Bada', 'Pyaaz Kachori', 'Mawa Kachori', 'Rabri'],
            monuments: ['Mehrangarh Fort', 'Umaid Bhawan Palace', 'Jaswant Thada', 'Clock Tower'],
            lifestyle: 'Blue City charm with narrow alleys and traditional crafts. Known for its fort and desert culture.',
            description: 'Winter offers perfect weather to explore the magnificent Blue City and its architectural wonders.'
          }
        }
      }
    },
    Kerala: {
      cities: {
        Kochi: {
          Winter: {
            festivals: ['Cochin Carnival', 'Christmas', 'New Year Celebrations'],
            food: ['Appam with Stew', 'Fish Curry', 'Puttu', 'Banana Chips'],
            monuments: ['Chinese Fishing Nets', 'Mattancherry Palace', 'St. Francis Church', 'Jewish Synagogue'],
            lifestyle: 'Coastal culture with Portuguese, Dutch, and British influences. Known for spice trade and backwaters.',
            description: 'Winter is perfect for exploring Kochi\'s colonial heritage and enjoying the pleasant sea breeze.'
          },
          Monsoon: {
            festivals: ['Onam', 'Boat Race Festival'],
            food: ['Karimeen Fish', 'Coconut Water', 'Hot Payasam'],
            monuments: ['Backwaters', 'Fort Kochi Beach', 'Marine Drive'],
            lifestyle: 'Monsoon brings Ayurvedic treatments and peaceful backwater experiences. Perfect for rejuvenation.',
            description: 'Experience Kerala\'s monsoon magic with Ayurvedic spas and serene backwater cruises.'
          }
        },
        Munnar: {
          Winter: {
            festivals: ['Neelakurinji Festival', 'Christmas', 'Pongal'],
            food: ['Puttu', 'Kadala Curry', 'Fresh Tea', 'Banana Fritters'],
            monuments: ['Tea Gardens', 'Eravikulam National Park', 'Mattupetty Dam', 'Echo Point'],
            lifestyle: 'Hill station tranquility with tea plantation culture. Perfect for nature lovers and peace seekers.',
            description: 'Winter offers crisp mountain air and clear views of the tea-covered hills.'
          },
          Summer: {
            festivals: ['Easter', 'Vishu'],
            food: ['Fresh Fruits', 'Cold Tea', 'Ice Cream'],
            monuments: ['Top Station', 'Kundala Lake', 'Rose Garden'],
            lifestyle: 'Summer brings cool mountain weather perfect for escaping the heat. Ideal for trekking and nature walks.',
            description: 'Summer in Munnar is pleasantly cool, making it a perfect hill station retreat.'
          }
        },
        Alleppey: {
          Monsoon: {
            festivals: ['Nehru Trophy Boat Race', 'Onam', 'Krishna Jayanti'],
            food: ['Fish Curry', 'Appam', 'Coconut Rice', 'Banana Leaf Meals'],
            monuments: ['Backwaters', 'Alleppey Beach', 'Krishnapuram Palace', 'Pathiramanal Island'],
            lifestyle: 'Venice of the East with houseboat culture. Monsoon brings lush paddy fields and romantic boat rides.',
            description: 'Monsoon is the soul of Alleppey with verdant backwaters and traditional boat races.'
          },
          Winter: {
            festivals: ['Christmas', 'Beach Festival'],
            food: ['Seafood Platter', 'Coconut Water', 'Prawn Curry'],
            monuments: ['Houseboat Experience', 'Vembanad Lake', 'Alappuzha Lighthouse'],
            lifestyle: 'Perfect houseboat weather with calm backwaters. Ideal for honeymooners and families.',
            description: 'Winter offers calm backwaters and perfect weather for houseboat experiences.'
          }
        }
      }
    }
  };

  const seasons = ['Winter', 'Summer', 'Monsoon'];

  // Get cities for selected state
  const availableCities = useMemo(() => {
    if (!selectedState || !travelData[selectedState]) return [];
    return Object.keys(travelData[selectedState].cities);
  }, [selectedState]);

  // Get current destination data
// In the Culturist component, modify the currentData calculation:
const currentData = useMemo(() => {
  // First check if we have pre-loaded city data
  if (cityData) return cityData;
  
  // Then check if we have all required selections
  if (!selectedState || !selectedCity || !selectedSeason) return null;
  
  // Finally try to get data from travelData
  return travelData[selectedState]?.cities?.[selectedCity]?.[selectedSeason] || null;
}, [selectedState, selectedCity, selectedSeason, cityData]);

  // Handle like button click
  const handleLike = (cardType) => {
    const key = `${selectedState}-${selectedCity}-${selectedSeason}-${cardType}`;
    setLikes(prev => ({
      ...prev,
      [key]: (prev[key] || 0) + 1
    }));
  };

  // Handle comment submission
  const handleCommentSubmit = () => {
    if (newComment.trim()) {
      const comment = {
        id: Date.now(),
        text: newComment.trim(),
        destination: `${selectedCity}, ${selectedState}`,
        season: selectedSeason,
        timestamp: new Date().toLocaleString()
      };
      setComments(prev => [comment, ...prev]);
      setNewComment('');
    }
  };

  // Reset selections when state changes
  const handleStateChange = (state) => {
    setSelectedState(state);
    setSelectedCity('');
    setSelectedSeason('');
  };

  const handleCityChange = (city) => {
    setSelectedCity(city);
    setSelectedSeason('');
  };

  return (
    <div className="container">
      <header className="header">
        <button onClick={onBack} className="back-to-home">
          ← Back to Home
        </button>
        <h1 className="title">
          🌏 Culturist
        </h1>
        <p className="subtitle">Explore India Seasonally - Discover the perfect time to visit Indian cities</p>
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
    </div>
  );
};

export default Culturist;