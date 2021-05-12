import Brewery from './components/Brewery'
import BreweryHeader from './components/BreweryHeader'
import axios from 'axios'
import './App.css';
import { useState, useEffect } from 'react'
const API_KEY = process.env.REACT_APP_API_KEY

const socialMedia = {
  //Rockwell
  'ChIJwwuuG_PayYkR5J6gi168I5w': {
    'instagram': 'https://www.instagram.com/rockwellbrewery/',
    'facebook': 'https://www.facebook.com/rockwellbrewery',
    'website': 'https://www.rockwellbrewery.com/'
  },
  //Attaboy
  'ChIJS6R36F3ayYkRnyIvsO4DA5Q': {
    'instagram': 'https://www.instagram.com/attaboybeer/?hl=en',
    'facebook': 'https://www.facebook.com/attaboybeer/',
    'website': 'https://www.attaboybeer.com/'
  }

}

function App() {
  const [breweries, setBreweries] = useState([]);
  const [search, setSearch] = useState('')

  // Note: the empty deps array [] means
  // this useEffect will run once
  // similar to componentDidMount()
  useEffect(() => {
    axios
      .get(`https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=39.4143,-77.4105&radius=20000&keyword=brewery&key=${API_KEY}`)
      .then(res => {
        setBreweries(res.data.results);
      })
      .catch(error => console.log(error.response));
  }, []);

  const handleChange = (e) => {
    setSearch(e.target.value)
  }

  for (let i = 0; i < breweries.length; i++) {
    let breweryId = breweries[i].place_id
    if (socialMedia[breweryId]) {
      breweries[i].instagram = socialMedia[breweryId].instagram
      breweries[i].facebook = socialMedia[breweryId].facebook
    }
  }

  let filteredBreweries = breweries.filter(brewery => (
    brewery.name.toLowerCase().includes(search.toLowerCase())
  ))


  return (

    < div className="brewery-app" >
      <div className="brewery-search">
        <h1 className="brewery-text">Search for a brewery</h1>
        <form>
          <input type="text" placeholder="Search" className="brewery-input" onChange={handleChange} />
        </form>
      </div>
      {/* <BreweryHeader /> */}
      {
        filteredBreweries.map(brewery => {
          return (
            <Brewery
              key={brewery.place_id}
              name={brewery.name.toUpperCase()}
              address={brewery.vicinity}
              rating={brewery.rating}
              user_ratings_total={brewery.user_ratings_total}
              open_now={brewery.opening_hours}
              instagram={brewery.instagram}
              facebook={brewery.facebook}
              website={brewery.website}
              phoneNumber={brewery.phoneNumber}
            // socialMedia={socialMedia.brewery.place_id}
            />
          )
        })
      }
    </div >
  );
}
export default App;
