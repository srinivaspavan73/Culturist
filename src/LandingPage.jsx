import React from 'react';
  // Popular cities data with images
  const popularCities = {
    Delhi: {
      cities: {
        "Delhi": {
          Winter: {
            festivals: ["Diwali"],
            food: ["Petha", "Chaat"],
            monuments: ["India Gate", "Taj Mahal", "Agra Fort"],
            lifestyle: "Bustling capital with historical charm. Mix of politics, heritage, and vibrant street life.",
            description: "Winter is ideal for sightseeing in Delhi with crisp weather and festive spirit."
          }
        }
      },
      image: "https://images.unsplash.com/photo-1587474260584-136574528ed5?w=800&q=80",
      bestTime: "October to March",
      highlight: "Historical monuments and rich Mughal heritage"
    },
    Maharashtra: {
      cities: {
        "Mumbai": {
          Winter: {
            festivals: ["Ganesh Chaturthi"],
            food: ["Vada Pav", "Pav Bhaji"],
            monuments: ["Gateway of India", "Elephanta Caves", "Colaba Causeway"],
            lifestyle: "Festive and lively coastal city with a blend of colonial architecture and modern buzz.",
            description: "Winter offers a pleasant break to explore Mumbai's coastal charm and bustling life."
          }
        }
      },
      image: "https://images.unsplash.com/photo-1595658658481-d53d3f999875?w=800&q=80",
      bestTime: "November to February",
      highlight: "Bollywood capital and financial hub with colonial architecture"
    },
    Kerala: {
      cities: {
        "Alleppey": {
          Winter: {
            festivals: ["Onam"],
            food: ["Sadya", "Seafood"],
            monuments: ["Alleppey Houseboats", "Fort Kochi"],
            lifestyle: "Relaxed and hospitable with serene backwaters and strong cultural roots.",
            description: "Winter is perfect to enjoy Kerala's tranquil backwaters and coastal cuisine."
          }
        }
      },
      image: "https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?w=800&q=80",
      bestTime: "October to March",
      highlight: "God's Own Country with pristine backwaters and houseboats"
    },
    Karnataka: {
      cities: {
        "Hampi": {
          Winter: {
            festivals: ["Hampi Utsav"],
            food: ["Bisi Bele Bath", "Mysore Pak"],
            monuments: ["Virupaksha Temple", "Royal Enclosure"],
            lifestyle: "Ancient ruins and vibrant markets in a heritage-rich setting.",
            description: "Winter brings cool temperatures to comfortably explore Hampi's ancient ruins."
          }
        }
      },
      image: "https://images.unsplash.com/photo-1582510003544-4d00b7f74220?w=800&q=80",
      bestTime: "October to February",
      highlight: "UNESCO World Heritage site with ancient Vijayanagara ruins"
    },
    Goa: {
      cities: {
        "Goa": {
          Winter: {
            festivals: ["Carnival", "Shigmo", "Christmas"],
            food: ["Fish Curry Rice", "Vindaloo", "Bebinca"],
            monuments: ["Basilica of Bom Jesus", "Se Cathedral", "Fort Aguada"],
            lifestyle: "Laid-back, friendly, and culturally diverse with a mix of beach and heritage life.",
            description: "Winter is peak season in Goa, perfect for beach hopping and festive celebrations."
          },
          Monsoon: {
            festivals: [],
            food: ["Fish Curry Rice", "Hot Feni", "Prawn Balchão"],
            monuments: ["Dudhsagar Falls", "Spice Plantations"],
            lifestyle: "Lush, romantic and quiet. Ideal for monsoon lovers and wellness retreats.",
            description: "Goa's monsoon season is magical with green hills and dramatic skies."
          }
        }
      },
      image: "https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?w=800&q=80",
      bestTime: "November to February",
      highlight: "Beach paradise with Portuguese heritage and vibrant nightlife"
    },
    Gujarat: {
      cities: {
        "Rann of Kutch": {
          Winter: {
            festivals: ["Rann Utsav"],
            food: ["Dabeli", "Fafda"],
            monuments: ["Kalo Dungar", "Dholavira"],
            lifestyle: "Desert culture with colorful traditions and artisan crafts.",
            description: "Winter is the best time to witness the vibrant Rann Utsav under full moons."
          }
        }
      },
      image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=800&q=80",
      bestTime: "November to February",
      highlight: "White salt desert with cultural festival and full moon nights"
    },
    "Madhya Pradesh": {
      cities: {
        "Khajuraho": {
          Winter: {
            festivals: ["Khajuraho Dance Festival"],
            food: ["Poha", "Chaat"],
            monuments: ["Western Group of Temples", "Light and Sound Show"],
            lifestyle: "Ancient and artistic vibe with classical art and sculpture all around.",
            description: "Winter is ideal to enjoy temple art and attend the dance festival in Khajuraho."
          }
        }
      },
      image: "https://images.unsplash.com/photo-1609920658906-8223bd289001?w=800&q=80",
      bestTime: "October to March",
      highlight: "UNESCO site famous for intricate temple sculptures and art"
    },
    "West Bengal": {
      cities: {
        "Sundarbans": {
          Winter: {
            festivals: ["Durga Puja"],
            food: ["Fish Curry"],
            monuments: ["Sundarbans National Park"],
            lifestyle: "Wild and natural with a strong connection to rivers and forests.",
            description: "Explore the world's largest mangrove forest during winter with ease and safety."
          }
        }
      },
      image: "https://images.unsplash.com/photo-1571115764595-644a1f56a55c?w=800&q=80",
      bestTime: "November to February",
      highlight: "World's largest mangrove forest and Royal Bengal Tiger habitat"
    },
    "Tamil Nadu": {
      cities: {
        "Madurai": {
          Winter: {
            festivals: ["Chithirai Festival"],
            food: ["Dosa", "Idli"],
            monuments: ["Meenakshi Temple", "Thirumalai Nayak Palace", "Pondy Marina"],
            lifestyle: "Deeply spiritual and cultural city with ancient temples and traditions.",
            description: "Winter brings cooler weather to explore the spiritual heart of Tamil Nadu."
          }
        }
      },
      image: "https://images.unsplash.com/photo-1582555172866-f73bb12a2ab3?w=800&q=80",
      bestTime: "October to March",
      highlight: "Temple city with magnificent Dravidian architecture"
    },
    "Jammu & Kashmir": {
      cities: {
        "Srinagar": {
          Winter: {
            festivals: ["Lohri"],
            food: ["Kashmiri Wazwan"],
            monuments: ["Dal Lake", "Gulmarg"],
            lifestyle: "Peaceful and scenic snowy landscapes with a blend of spirituality and adventure.",
            description: "Winter in Kashmir offers snow adventures and serene houseboat experiences."
          }
        }
      },
      image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&q=80",
      bestTime: "March to October",
      highlight: "Paradise on Earth with Dal Lake and stunning mountain views"
    },
    "Uttar Pradesh": {
      cities: {
        "Varanasi": {
          Winter: {
            festivals: ["Dev Deepawali", "Ganga Mahotsav", "Mahashivratri"],
            food: ["Kachori Sabzi", "Tamatar Chaat", "Malaiyyo"],
            monuments: ["Dashashwamedh Ghat", "Kashi Vishwanath Temple", "Sarnath"],
            lifestyle: "Spiritual, timeless, and deeply rooted in tradition. The Ganges shapes daily life.",
            description: "Winter is perfect to explore the ghats and witness spiritual rituals comfortably."
          }
        }
      },
      image: "https://images.unsplash.com/photo-1561361513-2d000a50f0dc?w=800&q=80",
      bestTime: "October to March",
      highlight: "Spiritual capital of India with ancient ghats along Ganges"
    },
    Ladakh: {
      cities: {
        "Leh": {
          Summer: {
            festivals: ["Ladakh Festival"],
            food: ["Thukpa", "Momo"],
            monuments: ["Pangong Lake", "Thiksey Monastery"],
            lifestyle: "Adventure-filled high-altitude land with monasteries and surreal landscapes.",
            description: "Summer is ideal for travel in Ladakh when roads are open and weather is calm."
          }
        }
      },
      image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&q=80",
      bestTime: "May to September",
      highlight: "High-altitude desert with Buddhist monasteries and pristine lakes"
    }
  };

const LandingPage = ({ onExplorePlace, onExploreAllStates }) => {


  return (
    <div className="landing-page">
      {/* Hero Section */}
      <div className="hero-section">
        <div className="hero-content">
          <h1 className="hero-title">🌏 Discover India's Cultural Treasures</h1>
          <p className="hero-subtitle">
            Explore the perfect destinations for every season. From snow-capped mountains to golden beaches,
            discover India's rich heritage, vibrant festivals, and authentic experiences.
          </p>
          <button 
            className="explore-all-button"
            onClick={onExploreAllStates}
          >
            <span>🗺️ Explore All States</span>
            <span className="button-arrow">→</span>
          </button>
        </div>
      </div>

      {/* Popular Destinations */}
      <div className="destinations-section">
        <h2 className="section-title">🌟 Popular Destinations to Explore</h2>
        <div className="destinations-grid">
          {Object.entries(popularCities).map(([state, data]) => {
            const cityName = Object.keys(data.cities)[0];
            const seasonKey = Object.keys(data.cities[cityName])[0];
            
            return (
              <div key={state} className="destination-card">
                <div className="destination-image">
                  <img src={data.image} alt={cityName} />
                  <div className="image-overlay">
                    <span className="destination-name">{cityName}</span>
                    <span className="destination-state">{state}</span>
                  </div>
                </div>
                
                <div className="destination-info">
                  <div className="destination-details">
                    <div className="detail-item">
                      <span className="detail-icon">🕐</span>
                      <div>
                        <strong>Best Time:</strong>
                        <span>{data.bestTime}</span>
                      </div>
                    </div>
                    
                    <div className="detail-item">
                      <span className="detail-icon">✨</span>
                      <div>
                        <strong>Highlight:</strong>
                        <span>{data.highlight}</span>
                      </div>
                    </div>
                  </div>
                  
                  <button 
                    className="explore-button"
                    onClick={() => onExplorePlace(state, cityName, seasonKey)}
                  >
                    <span>Explore {cityName}</span>
                    <span className="button-arrow">→</span>
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Features Section */}
      <div className="features-section">
        <h2 className="section-title">🎯 What Makes Each Destination Special</h2>
        <div className="features-grid">
          <div className="feature-card">
            <div className="feature-icon">🎭</div>
            <h3>Seasonal Festivals</h3>
            <p>Experience authentic local festivals and cultural celebrations unique to each season and region.</p>
          </div>
          
          <div className="feature-card">
            <div className="feature-icon">🍛</div>
            <h3>Regional Cuisine</h3>
            <p>Discover mouth-watering local delicacies and traditional recipes passed down through generations.</p>
          </div>
          
          <div className="feature-card">
            <div className="feature-icon">🏛️</div>
            <h3>Heritage Sites</h3>
            <p>Explore magnificent monuments, ancient temples, and UNESCO World Heritage sites.</p>
          </div>
          
          <div className="feature-card">
            <div className="feature-icon">🌈</div>
            <h3>Local Culture</h3>
            <p>Immerse yourself in diverse lifestyles, traditions, and the warm hospitality of local communities.</p>
          </div>
        </div>
      </div>
    </div>
  );
};
export { popularCities };
export default LandingPage;