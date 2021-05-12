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
  },
  //Midnight Run
  'ChIJr_BdwPLayYkRRyo6BRUXw2w': {
    'instagram': 'https://www.instagram.com/midnightrunbrew/',
    'facebook': 'https://www.facebook.com/MidnightRunBrew',
    'website': 'https://www.rockwellbrewery.com/'
  },
  //Jug Bridge
  'ChIJPYJzj5_byYkR88Pbw_wVoPU': {
    'instagram': 'https://www.instagram.com/jugbridgebrewery/',
    'facebook': 'https://www.facebook.com/JugBridgeBrewery',
    'website': 'https://www.attaboybeer.com/'
  },
  //Idiom Brewing
  'ChIJpxCJoQPbyYkR7ZxXFuJYf_8': {
    'instagram': 'https://www.instagram.com/idiombrewingco/',
    'facebook': 'https://www.facebook.com/idiombrewingco',
    'website': 'https://www.rockwellbrewery.com/'
  },
  //Monocacy
  'ChIJoxBZq7_ayYkRCWWaqi0JFxk': {
    'instagram': 'https://www.instagram.com/monocacybrewing/',
    'facebook': 'https://www.facebook.com/MonocacyBrewing',
    'website': 'https://www.attaboybeer.com/'
  },
  //Olde Mother
  'ChIJ5Zdr3mTayYkRKVdAQMixdIs': {
    'instagram': 'https://www.instagram.com/oldemotherbrewing/',
    'facebook': 'https://www.facebook.com/OldeMother',
    'website': 'https://www.rockwellbrewery.com/'
  },
  //Steinhardt
  'ChIJ__8v8CrcyYkRp1TcUakWYsA': {
    'instagram': 'https://www.instagram.com/steinhardt.brewing.co/',
    'facebook': 'https://www.facebook.com/Steinhardt-Brewing-589349558198639',
    'website': 'https://www.attaboybeer.com/'
  },
  //Smoketown
  'ChIJ3XhKGqHbyYkRbuXhVqowuuc': {
    'instagram': 'https://www.instagram.com/smoketowncreekside/',
    'facebook': 'https://www.facebook.com/smoketowncreekside',
    'website': 'https://www.rockwellbrewery.com/'
  },
  //Attaboy Barrel
  'ChIJYe4IzaLbyYkR3Zvn2Ag-52U': {
    'instagram': 'https://www.instagram.com/attaboybarrelhouse/',
    'facebook': 'https://www.facebook.com/attaboybarrelhouse',
    'website': 'https://www.attaboybeer.com/'
  },
  //Freys
  'ChIJ93jNSy7NyYkRyQL4amslEsI': {
    'instagram': 'https://www.instagram.com/freysbrewing/',
    'facebook': 'https://www.facebook.com/FreysBrewing',
    'website': 'https://www.rockwellbrewery.com/'
  },
  //Milkhouse
  'ChIJER4iJRPNyYkRA9B9Bk4s1u0': {
    'instagram': 'https://www.instagram.com/milkhousebrewery/',
    'facebook': 'https://www.facebook.com/MilkhouseBrewery',
    'website': 'https://www.attaboybeer.com/'
  },
  //Mad Science
  'ChIJk6DfVzYntokRL4d5r-YF8Bo': {
    'instagram': 'https://www.instagram.com/madsciencebrewing/',
    'facebook': 'https://www.facebook.com/madsciencebrewing',
    'website': 'https://www.rockwellbrewery.com/'
  },
  //Red Shedman
  'ChIJTQUT30wtyIkRb7ucR1Qaewk': {
    'instagram': 'https://www.instagram.com/redshedmanbrewery/',
    'facebook': 'https://www.facebook.com/RedShedman',
    'website': 'https://www.attaboybeer.com/'
  },
  //Smoketown Brewing Station
  'ChIJYUxiDCIetokRK7Z4pNWhXSQ': {
    'instagram': 'https://www.instagram.com/smoketownbrewing/',
    'facebook': 'https://www.facebook.com/smoketownbrewingstation',
    'website': 'https://www.rockwellbrewery.com/'
  },
  //Brewer's Alley
  'ChIJo39zsFnayYkR4q-mvQbOpP4': {
    'instagram': 'https://www.instagram.com/brewersalley/',
    'facebook': 'https://www.facebook.com/brewers.alley',
    'website': 'https://www.attaboybeer.com/'
  },
  //Flood Zone
  'ChIJdXekOBE1yIkRqM3b7TNZ3CU': {
    'instagram': 'https://www.instagram.com/floodzoneub/',
    'facebook': 'https://www.facebook.com/thefloodzoneub',
    'website': 'https://www.rockwellbrewery.com/'
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
    console.log(breweries[i].name, breweries[i].place_id)
  }

  let filteredBreweries = breweries.filter(brewery => (
    brewery.name.toLowerCase().includes(search.toLowerCase())
  ))

  function compareValues(key, order = 'asc') {
    console.log('sorting!')
    return function innerSort(a, b) {
      if (!a.hasOwnProperty(key) || !b.hasOwnProperty(key)) {
        // property doesn't exist on either object
        return 0;
      }

      const varA = (typeof a[key] === 'string')
        ? a[key].toUpperCase() : a[key];
      const varB = (typeof b[key] === 'string')
        ? b[key].toUpperCase() : b[key];

      let comparison = 0;
      if (varA > varB) {
        comparison = 1;
      } else if (varA < varB) {
        comparison = -1;
      }
      return (
        (order === 'desc') ? (comparison * -1) : comparison
      );
    };
  }

  const filteredAndSortedBreweries = filteredBreweries.sort(compareValues('name', 'asc'))
  console.log(filteredAndSortedBreweries)


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
        filteredAndSortedBreweries.map(brewery => {
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
