import Header from './components/Header/';
import Home from './pages/Home/';
import ByGender from './pages/ByGender';
import BySearch from './pages/BySearch/';
import { useDispatch, } from 'react-redux'
import { getGenresAsync } from './redux/slices/genresSlice';
import { useEffect } from 'react';
import { checkIfItIsAMobileDevice } from './redux/slices/initialStatusSlice';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import MovieDetails from './components/MovieDetails/';

function App() {

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getGenresAsync());
    dispatch(checkIfItIsAMobileDevice());
  }, []);

  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/movie" element={<MovieDetails/>} />
        <Route path="gender/:genderId" element={<ByGender />} />
        <Route path="search/:title" element={<BySearch />} />
      </Routes>
    </div>
  );
}

export default App;