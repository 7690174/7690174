import './App.css';
import Movie from './components/Movie';
import {useState, useEffect} from 'react'
const movieApi = 'https://imdb-api.com/en/API/SearchMovie/k_uqw6i8z2/'
const movieTop = 'https://imdb-api.com/en/API/Top250Movies/k_uqw6i8z2'
function App() {
  const [movie, setMovie] = useState([])
  const[term, setTerm] = useState('')

  const onHandelTerm = (e) => {
    setTerm(e.target.value)
  }

  useEffect(() =>{
    fetch(movieTop)
    .then(res => res.json())
    .then(res => setMovie(res.items))
  } ,[])

  const onHandelSearch = () => {
      e.preventDefault()
      fetch(movieApi)
      .then(res => res.json())
      .then(res => setMovie(res.results))
      setTerm('')
  }

  return (
    <>
        <header>
          <form action='submit' onSubmit={onHandelSearch}>
            <input type="text" placeholder="Search..." value={term} onChange={onHandelTerm} />
          </form>
        </header>
        <div className="movies">
          {movie.map((elem) => <Movie key={elem.id} {...elem} />)}
        </div>
    </>
  );
}

export default App;
