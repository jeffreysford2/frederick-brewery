import Brewery from './components/Brewery'
import './App.css';
import { useState } from 'react'

const breweries = [
  {
    id: 1,
    name: 'Idiom',
    address: '340 E Patrick St #104, Frederick, MD 21701',
    fridayHours: '12:00pm - 10:00pm',
    website: 'https://www.idiombrewing.com/',
    instagram: 'https://www.instagram.com/idiombrewingco/',
    facebook: 'https://www.facebook.com/idiombrewingco',
    phoneNumber: '(240) 578-4152'
  },
  {
    id: 2,
    name: 'Attaboy',
    address: '340 E Patrick St #104, Frederick, MD 21701',
    fridayHours: '12:00pm - 10:00pm',
    website: 'https://www.idiombrewing.com/',
    instagram: 'https://www.instagram.com/idiombrewingco/',
    facebook: 'https://www.facebook.com/idiombrewingco',
    phoneNumber: '(240) 578-4152'
  }, {
    id: 3,
    name: 'Rockwell',
    address: '340 E Patrick St #104, Frederick, MD 21701',
    fridayHours: '12:00pm - 10:00pm',
    website: 'https://www.idiombrewing.com/',
    instagram: 'https://www.instagram.com/idiombrewingco/',
    facebook: 'https://www.facebook.com/idiombrewingco',
    phoneNumber: '(240) 578-4152'
  },
  {
    id: 4,
    name: 'Moncoacy',
    address: '340 E Patrick St #104, Frederick, MD 21701',
    fridayHours: '12:00pm - 10:00pm',
    website: 'https://www.idiombrewing.com/',
    instagram: 'https://www.instagram.com/idiombrewingco/',
    facebook: 'https://www.facebook.com/idiombrewingco',
    phoneNumber: '(240) 578-4152'
  }, {
    id: 5,
    name: 'Olde Mother',
    address: '340 E Patrick St #104, Frederick, MD 21701',
    fridayHours: '12:00pm - 10:00pm',
    website: 'https://www.idiombrewing.com/',
    instagram: 'https://www.instagram.com/idiombrewingco/',
    facebook: 'https://www.facebook.com/idiombrewingco',
    phoneNumber: '(240) 578-4152'
  },
  {
    id: 6,
    name: 'Flying Dog',
    address: '340 E Patrick St #104, Frederick, MD 21701',
    fridayHours: '12:00pm - 10:00pm',
    website: 'https://www.idiombrewing.com/',
    instagram: 'https://www.instagram.com/idiombrewingco/',
    facebook: 'https://www.facebook.com/idiombrewingco',
    phoneNumber: '(240) 578-4152'
  },
  {
    id: 7,
    name: 'Smoketown Creekside',
    address: '340 E Patrick St #104, Frederick, MD 21701',
    fridayHours: '12:00pm - 10:00pm',
    website: 'https://www.idiombrewing.com/',
    instagram: 'https://www.instagram.com/idiombrewingco/',
    facebook: 'https://www.facebook.com/idiombrewingco',
    phoneNumber: '(240) 578-4152'
  },
  {
    id: 8,
    name: 'Steinhardt',
    address: '340 E Patrick St #104, Frederick, MD 21701',
    fridayHours: '12:00pm - 10:00pm',
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
    <div className="brewery-app">
      <div className="brewery-search">
        <h1 className="brewery-text">Search a brewery</h1>
        <form>
          <input type="text" placeholder="Search" className="brewery-input" onChange={handleChange} />
        </form>
      </div>
      {filteredBreweries.map(brewery => {
        return (
          <Brewery
            key={brewery.id}
            name={brewery.name}
            address={brewery.address}
            instagram={brewery.instagram}
            phoneNumber={brewery.phoneNumber}
          // open={true or false}
          />
        )
      })}

    </div>
  );
}

export default App;
