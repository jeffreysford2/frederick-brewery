import Brewery from './components/Brewery'
import './App.css';
import { useState } from 'react'




const breweries = [
  {
    id: 1,
    name: 'Idiom Brewing Co.',
    address: '340 E Patrick St #104, Frederick, MD 21701',
    hours: [
      'Sunday: 12:00pm - 10:00pm',
      'Monday: 12:00pm - 10:00pm',
      'Tuesday: 12:00pm - 10:00pm',
      'Wednesday: 12:00pm - 10:00pm',
      'Thursday: 12:00pm - 10:00pm',
      'Friday: 12:00pm - 10:00pm',
      'Saturday: 12:00pm - 10:00pm'
    ],
    website: 'https://www.idiombrewing.com/',
    instagram: 'https://www.instagram.com/idiombrewingco/',
    facebook: 'https://www.facebook.com/idiombrewingco',
    phoneNumber: '(240) 578-4152'
  },
  {
    id: 2,
    name: 'Attaboy Beer',
    address: '340 E Patrick St #104, Frederick, MD 21701',
    hours: [
      'Sunday: 12:00pm - 10:00pm',
      'Monday: 12:00pm - 10:00pm',
      'Tuesday: 12:00pm - 10:00pm',
      'Wednesday: 12:00pm - 10:00pm',
      'Thursday: 12:00pm - 10:00pm',
      'Friday: 12:00pm - 10:00pm',
      'Saturday: 12:00pm - 10:00pm'
    ],
    website: 'https://www.idiombrewing.com/',
    instagram: 'https://www.instagram.com/idiombrewingco/',
    facebook: 'https://www.facebook.com/idiombrewingco',
    phoneNumber: '(240) 578-4152'
  }, {
    id: 3,
    name: 'Rockwell Brewery',
    address: '340 E Patrick St #104, Frederick, MD 21701',
    hours: [
      'Sunday: 12:00pm - 10:00pm',
      'Monday: 12:00pm - 10:00pm',
      'Tuesday: 12:00pm - 10:00pm',
      'Wednesday: 12:00pm - 10:00pm',
      'Thursday: 12:00pm - 10:00pm',
      'Friday: 12:00pm - 10:00pm',
      'Saturday: 12:00pm - 10:00pm'
    ],
    website: 'https://www.idiombrewing.com/',
    instagram: 'https://www.instagram.com/idiombrewingco/',
    facebook: 'https://www.facebook.com/idiombrewingco',
    phoneNumber: '(240) 578-4152'
  },
  {
    id: 4,
    name: 'Moncoacy Brewing Co.',
    address: '340 E Patrick St #104, Frederick, MD 21701',
    hours: [
      'Sunday: 12:00pm - 10:00pm',
      'Monday: 12:00pm - 10:00pm',
      'Tuesday: 12:00pm - 10:00pm',
      'Wednesday: 12:00pm - 10:00pm',
      'Thursday: 12:00pm - 10:00pm',
      'Friday: 12:00pm - 10:00pm',
      'Saturday: 12:00pm - 10:00pm'
    ],
    website: 'https://www.idiombrewing.com/',
    instagram: 'https://www.instagram.com/idiombrewingco/',
    facebook: 'https://www.facebook.com/idiombrewingco',
    phoneNumber: '(240) 578-4152'
  }, {
    id: 5,
    name: 'Olde Mother Brewing Co.',
    address: '340 E Patrick St #104, Frederick, MD 21701',
    hours: [
      'Sunday: 12:00pm - 10:00pm',
      'Monday: 12:00pm - 10:00pm',
      'Tuesday: 12:00pm - 10:00pm',
      'Wednesday: 12:00pm - 10:00pm',
      'Thursday: 12:00pm - 10:00pm',
      'Friday: 12:00pm - 10:00pm',
      'Saturday: 12:00pm - 10:00pm'
    ],
    website: 'https://www.idiombrewing.com/',
    instagram: 'https://www.instagram.com/idiombrewingco/',
    facebook: 'https://www.facebook.com/idiombrewingco',
    phoneNumber: '(240) 578-4152'
  },
  {
    id: 6,
    name: 'Flying Dog Brewery',
    address: '340 E Patrick St #104, Frederick, MD 21701',
    hours: [
      'Sunday: 12:00pm - 10:00pm',
      'Monday: 12:00pm - 10:00pm',
      'Tuesday: 12:00pm - 10:00pm',
      'Wednesday: 12:00pm - 10:00pm',
      'Thursday: 12:00pm - 10:00pm',
      'Friday: 12:00pm - 10:00pm',
      'Saturday: 12:00pm - 10:00pm'
    ],
    website: 'https://www.idiombrewing.com/',
    instagram: 'https://www.instagram.com/idiombrewingco/',
    facebook: 'https://www.facebook.com/idiombrewingco',
    phoneNumber: '(240) 578-4152'
  },
  {
    id: 7,
    name: 'Smoketown Creekside',
    address: '340 E Patrick St #104, Frederick, MD 21701',
    hours: [
      'Sunday: 12:00pm - 10:00pm',
      'Monday: 12:00pm - 10:00pm',
      'Tuesday: 12:00pm - 10:00pm',
      'Wednesday: 12:00pm - 10:00pm',
      'Thursday: 12:00pm - 10:00pm',
      'Friday: 12:00pm - 10:00pm',
      'Saturday: 12:00pm - 10:00pm'
    ],
    website: 'https://www.idiombrewing.com/',
    instagram: 'https://www.instagram.com/idiombrewingco/',
    facebook: 'https://www.facebook.com/idiombrewingco',
    phoneNumber: '(240) 578-4152'
  },
  {
    id: 8,
    name: 'Steinhardt Brewing Co.',
    address: '340 E Patrick St #104, Frederick, MD 21701',
    hours: [
      'Sunday: 12:00pm - 10:00pm',
      'Monday: 12:00pm - 10:00pm',
      'Tuesday: 12:00pm - 10:00pm',
      'Wednesday: 12:00pm - 10:00pm',
      'Thursday: 12:00pm - 10:00pm',
      'Friday: 12:00pm - 10:00pm',
      'Saturday: 12:00pm - 10:00pm'
    ],
    website: 'https://www.idiombrewing.com/',
    instagram: 'https://www.instagram.com/idiombrewingco/',
    facebook: 'https://www.facebook.com/idiombrewingco',
    phoneNumber: '(240) 578-4152'
  }
]

function App() {
  // const [brewery, setBrewery] = useState([])
  const [search, setSearch] = useState('')




  const handleChange = (e) => {
    setSearch(e.target.value)
  }

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
              key={brewery.id}
              name={brewery.name}
              address={brewery.address}
              instagram={brewery.instagram}
              phoneNumber={brewery.phoneNumber}
              hours={brewery.hours}

            // open={true or false}
            />
          )
        })
      }

    </div >
  );
}

export default App;
