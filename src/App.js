import './App.css';
import Home from './pages/Home/';
import { useDispatch,  } from 'react-redux'
import { getGenresAsync } from './redux/slices/genresSlice';
import { useEffect } from 'react';

function App() {

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getGenresAsync());
  }, []);

  return (
    <div className="App">
      <Home />
    </div>
  );
}

export default App;