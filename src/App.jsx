import React, { useState } from 'react';
import Culturist from './Culturist';
import LandingPage, { popularCities } from './LandingPage';

const App = () => {
  const [view, setView] = useState('landing');
  const [preSelected, setPreSelected] = useState({
    state: '',
    city: '',
    season: '',
    cityData: null
  });

  const handleExploreAll = () => {
    setView('culturist');
    setPreSelected({ 
      state: '', 
      city: '', 
      season: '',
      cityData: null
    });
  };

  const handleExploreCity = (state, city, season) => {
    setView('culturist');
    setPreSelected({ 
      state, 
      city, 
      season,
      cityData: popularCities[state].cities[city][season]
    });
  };

  return (
    <>
      {view === 'landing' ? (
        <LandingPage 
          onExploreAllStates={handleExploreAll} 
          onExplorePlace={handleExploreCity} 
        />
      ) : (
        <Culturist 
          initialState={preSelected.state}
          initialCity={preSelected.city} 
          initialSeason={preSelected.season}
          cityData={preSelected.cityData}
          onBack={() => setView('landing')}
        />
      )}
    </>
  );
};

export default App;