import './App.css'
import getRandomNumber from './utils/getRandomNumber'
import useFetch from './hooks/useFetch'
import { useEffect, useState } from 'react'
import LocationInfo from './components/LocationInfo'
import ResidentCard from './components/ResidentCard'
import FormSearch from './components/FormSearch'

function App() {

  const randomId = getRandomNumber(126)
  const [idLocation, setIdLocation] = useState(randomId)
  const url = `https://rickandmortyapi.com/api/location/${idLocation ? idLocation : randomId}`
  const [location, getApiLocation, hasError] = useFetch(url)

  useEffect(() => {
    getApiLocation()
  }, [url])
  
console.log(location);
console.log(idLocation);
  return (
    <div className='app'>
      <h1 className='title'>Rick and morty</h1>
      <FormSearch setIdLocation={setIdLocation}/>
      {
        hasError
          ? <h2>X hey, you must provide a id between 1 and 126</h2>
          : <>
                <LocationInfo location={location}/>
                <div className='resident-container'>
                  {
                    location?.residents.map(url => (
                      <ResidentCard 
                        url={url}
                        key={url}
                      />
                    ))
                  }
                </div>
          </>
      }

    </div>
  )
}

export default App
