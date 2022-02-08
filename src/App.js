import './App.css';
import Home from './pages/Home/';
import { useDispatch,  } from 'react-redux'
import { getGenresAsync } from './redux/slices/genresSlice';
import { useEffect } from 'react';
import { checkIfItIsAMobileDevice } from './redux/slices/initialStatusSlice';

function App() {

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getGenresAsync());
    dispatch(checkIfItIsAMobileDevice());
  }, []);

  return (
    <div className="App">
      <Home />
    </div>
  );
}

export default App;