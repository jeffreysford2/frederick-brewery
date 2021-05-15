import Brewery from './components/Brewery'
import BreweryHeader from './components/BreweryHeader'
import GeoLocation from './components/GeoLocation'
import Map from './components/Map'
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
  const [viewport, setViewport] = useState({
    latitude: 39.414,
    longitude: -77.410,
    width: "800px",
    height: "800px",
    zoom: 8
  });
  const [breweries, setBreweries] = useState([]);
  const [search, setSearch] = useState('')
  const [[column, direction], setSort] = useState(['name', 'asc'])
  // const [location, setLocation] = useState('');

  // setLocation(GeoLocation())

  const location = GeoLocation()


  useEffect(() => {
    axios
      .get(`https://corsanywhere.herokuapp.com/https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=39.4143,-77.4105&radius=20000&keyword=brewery&key=${API_KEY}`)
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

    // if (breweryId === 'ChIJdXekOBE1yIkRqM3b7TNZ3CU') {
    //   breweries[i].opening_hours.open_now = true;
    //   console.log(breweries[i].opening_hours.open_now)
    // }

    // if (location === undefined) {

    // } else {
    //   breweries[i].distance = getDistanceFromLatLonInMi(
    //     breweries[i].geometrygeometry.location.lat,
    //     breweries[i].geometrygeometry.location.lat,
    //     JSON.stringify(location).coordinates.lat,
    //     JSON.stringify(location).coordinates.lng
    //   )
    // }

  }
  // useEffect(() => {
  //   console.log('in effect')
  //   for (let i = 0; i < breweries.length; i++) {

  //     console.log('hi', location.coordinates.lat)
  //     console.log('location:', location)



  //     breweries[i].distance = getDistanceFromLatLonInMi(
  //       breweries[i].geometry.location.lat,
  //       breweries[i].geometry.location.lng,
  //       JSON.stringify(location).coordinates.lat,
  //       JSON.stringify(location).coordinates.lng
  //     )
  //     console.log('changed!!!!', breweries[i].distance)
  //   }

  // }, [location])

  let filteredBreweries = breweries.filter(brewery => (
    brewery.name.toLowerCase().includes(search.toLowerCase())
  ))

  function compareValues(key, order = 'asc') {
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

  function getDistanceFromLatLonInMi(lat1, lon1, lat2, lon2) {
    console.log('in formula')
    var R = 6371; // Radius of the earth in km
    var dLat = deg2rad(lat2 - lat1);  // deg2rad below
    var dLon = deg2rad(lon2 - lon1);
    var a =
      Math.sin(dLat / 2) * Math.sin(dLat / 2) +
      Math.cos(deg2rad(lat1)) * Math.cos(deg2rad(lat2)) *
      Math.sin(dLon / 2) * Math.sin(dLon / 2)
      ;
    var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    var d = R * c * 0.621371; // Distance in miles
    return d;
  }

  function deg2rad(deg) {
    return deg * (Math.PI / 180)
  }

  const filteredAndSortedBreweries = filteredBreweries.sort(compareValues(column, direction))
  console.log(breweries)



  return (

    < div className="brewery-app" >
      <div className="brewery-search">
        <h1 className="brewery-text">Search for a brewery</h1>
        <form>
          <input type="text" placeholder="Search" className="brewery-input" onChange={handleChange} />
        </form>
        {/* <div>
          {location.loaded ? JSON.stringify(location) : "Location data not available yet"}
        </div> */}
      </div>

      <Map
        breweries={filteredAndSortedBreweries}
      />

      <div className="brewery-info-container">
        <BreweryHeader setSort={setSort} />
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
                location={brewery.geometry.location.lat}
              // socialMedia={socialMedia.brewery.place_id}
              />
            )
          })
        }
      </div >
    </div>
  );
}
export default App;
