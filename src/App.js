import axios from 'axios';
import { useState, useEffect } from 'react';
import Header from './components/Header';
import CardLoader from './components/CarLoader';

function App() {

  const [pokemons, setPokemons] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [search, setSearch] = useState('');
  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      setError(null);

      try {
        const results = await axios(`https://pokeapi.co/api/v2/pokemon?limit=500`);

        setPokemons(results.data.results);
        console.log(results.data.results);
      }
      catch(error){
        setError(error.message);
        console.log(error.message);
      }

      setLoading(false);
    }

    fetchData();
  }, []);

  return (
    <div>
      <Header />
      {error ? <div>{error}</div> : null}
      <CardLoader isLoading={loading} pokemons={pokemons}/>
    </div>
  );
}

export default App;
