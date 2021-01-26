import React, { lazy, Suspense } from 'react'
import './App.css';
// import Home from './Component/Home';
import { Provider } from 'react-redux'
import store from './Redux/store'
import Loader from 'react-loader-spinner'
const Home = lazy(() => import('./Component/Home.js'))
function App() {
  return (
    <Provider store={store}>
      <Suspense fallback={<div className='Loader'>
        <Loader
         type="Rings"
         color="crimson"
         height={500}
         width={500}
         timeout={3000} //3 secs
 
      />
      </div>}>
      <div className="App">
        <Home />
      </div>
      </Suspense>
    </Provider>

  );
}

export default App;
