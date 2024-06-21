import { Button } from 'flowbite-react';
import React from 'react';
import { BrowserRouter, Route,Routes } from 'react-router-dom';
import Signin from './Pages/Signin';
import Home from './Pages/Home';
import Signup from './Pages/Signup';
const App = () => {
  return (
   <BrowserRouter>
  <Routes>
    <Route path='/' element={<Signin />} />
    <Route path='/Home' element={<Home />} />
    <Route path='/Signup' element={<Signup />} />
  </Routes>
   </BrowserRouter>
  );
};

export default App;