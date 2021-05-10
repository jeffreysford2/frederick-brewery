import Brewery from './components/Brewery'
import axios from 'axios'
import './App.css';
import { useState, useEffect } from 'react'
const API_KEY = process.env.REACT_APP_API_KEY




// const breweries = [
//   {
//     id: 1,
//     name: 'Idiom Brewing Co.',
//     address: '340 E Patrick St #104, Frederick, MD 21701',
//     website: 'https://www.idiombrewing.com/',
//     instagram: 'https://www.instagram.com/idiombrewingco/',
//     facebook: 'https://www.facebook.com/idiombrewingco',
//     phoneNumber: '(240) 578-4152'
//   },
//   {
//     id: 2,
//     name: 'Attaboy Beer',
//     address: '340 E Patrick St #104, Frederick, MD 21701',
//     website: 'https://www.idiombrewing.com/',
//     instagram: 'https://www.instagram.com/idiombrewingco/',
//     facebook: 'https://www.facebook.com/idiombrewingco',
//     phoneNumber: '(240) 578-4152'
//   }, {
//     id: 3,
//     name: 'Rockwell Brewery',
//     address: '340 E Patrick St #104, Frederick, MD 21701',
//     website: 'https://www.idiombrewing.com/',
//     instagram: 'https://www.instagram.com/idiombrewingco/',
//     facebook: 'https://www.facebook.com/idiombrewingco',
//     phoneNumber: '(240) 578-4152'
//   },
//   {
//     id: 4,
//     name: 'Moncoacy Brewing Co.',
//     address: '340 E Patrick St #104, Frederick, MD 21701',
//     website: 'https://www.idiombrewing.com/',
//     instagram: 'https://www.instagram.com/idiombrewingco/',
//     facebook: 'https://www.facebook.com/idiombrewingco',
//     phoneNumber: '(240) 578-4152'
//   }, {
//     id: 5,
//     name: 'Olde Mother Brewing Co.',
//     address: '340 E Patrick St #104, Frederick, MD 21701',
//     website: 'https://www.idiombrewing.com/',
//     instagram: 'https://www.instagram.com/idiombrewingco/',
//     facebook: 'https://www.facebook.com/idiombrewingco',
//     phoneNumber: '(240) 578-4152'
//   },
//   {
//     id: 6,
//     name: 'Flying Dog Brewery',
//     address: '340 E Patrick St #104, Frederick, MD 21701',
//     website: 'https://www.idiombrewing.com/',
//     instagram: 'https://www.instagram.com/idiombrewingco/',
//     facebook: 'https://www.facebook.com/idiombrewingco',
//     phoneNumber: '(240) 578-4152'
//   },
//   {
//     id: 7,
//     name: 'Smoketown Creekside',
//     address: '340 E Patrick St #104, Frederick, MD 21701',
//     website: 'https://www.idiombrewing.com/',
//     instagram: 'https://www.instagram.com/idiombrewingco/',
//     facebook: 'https://www.facebook.com/idiombrewingco',
//     phoneNumber: '(240) 578-4152'
//   },
//   {
//     id: 8,
//     name: 'Steinhardt Brewing Co.',
//     address: '340 E Patrick St #104, Frederick, MD 21701',
//     website: 'https://www.idiombrewing.com/',
//     instagram: 'https://www.instagram.com/idiombrewingco/',
//     facebook: 'https://www.facebook.com/idiombrewingco',
//     phoneNumber: '(240) 578-4152'
//   },
//   {
//     id: 9,
//     name: 'Jug Bridge Brewery',
//     address: '340 E Patrick St #104, Frederick, MD 21701',
//     website: 'https://www.idiombrewing.com/',
//     instagram: 'https://www.instagram.com/idiombrewingco/',
//     facebook: 'https://www.facebook.com/idiombrewingco',
//     phoneNumber: '(240) 578-4152'
//   },
//   {
//     id: 10,
//     name: 'Midnight Run Brewing',
//     address: '340 E Patrick St #104, Frederick, MD 21701',
//     website: 'https://www.idiombrewing.com/',
//     instagram: 'https://www.instagram.com/idiombrewingco/',
//     facebook: 'https://www.facebook.com/idiombrewingco',
//     phoneNumber: '(240) 578-4152'
//   }
// ]

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
        console.log('BREWERIES:', breweries)
        //console.log(breweries[2].name)
      })
      .catch(error => console.log(error.response));
  }, []);

  //       },
  //       // Note: it's important to handle errors here
  //       // instead of a catch() block so that we don't swallow
  //       // exceptions from actual bugs in components.
  //       (error) => {
  //         setIsLoaded(true);
  //         setError(error);
  //       }
  //     )
  // }, [])

  // if (error) {
  //   return <div>Error: {error.message}</div>;
  // } else if (!isLoaded) {
  //   return <div>Loading...</div>;
  // } else {
  //   return (
  //     <ul>
  //       {items.map(item => (
  //         <li key={item.id}>
  //           {item.name} {item.price}
  //         </li>
  //       ))}
  //     </ul>
  //   );




  // const [brewery, setBrewery] = useState([])





  const handleChange = (e) => {
    setSearch(e.target.value)
  }
  console.log('breweries:', breweries)
  const filteredBreweries = breweries.filter(brewery => (
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
            />
          )
        })
      }

    </div >
  );
}

export default App;
