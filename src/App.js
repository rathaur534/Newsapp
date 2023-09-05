import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import Cards from './components/Cards'
import { useContext, useState } from 'react';
import Spinner from './components/Spinner';
import { useEffect } from 'react';
import MyContext from './context/MyContext';

function App() {
  const { loader, data } = useContext(MyContext);
  return (
    <div>
      <Navbar />
      {
        loader ? (<Spinner />) : (<Cards />)
      }
    
    </div>
  );
}

export default App;
