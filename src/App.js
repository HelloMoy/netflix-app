import Header from './components/Header/';
import Home from './pages/Home/';
import MoviesGridPage from './pages/MoviesGridPage/';
import { useDispatch, } from 'react-redux'
import { getGenresAsync } from './redux/slices/genresSlice';
import { useEffect } from 'react';
import { checkIfItIsAMobileDevice } from './redux/slices/initialStatusSlice';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import MoviesGridSearch from './components/MoviesGridSearch/';

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
        <Route path="gender/:genderId" element={<MoviesGridPage/>} />
        <Route path="search/:title" element={<MoviesGridSearch/>} />
      </Routes>
    </div>
  );
}

export default App;