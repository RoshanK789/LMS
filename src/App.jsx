import { Button } from 'flowbite-react';
import React, { createContext,useState } from 'react';
import { BrowserRouter, Route,Routes } from 'react-router-dom';
import Signin from './Pages/Signin';
import Home from './Pages/Home';
import Signup from './Pages/Signup';
import ContactForm from './Pages/ContactForm';
import Success from './Pages/Success';
import Course from './Pages/Course';
import Quiz from './Pages/Quiz';
import Viewcourse from './Pages/Viewcourse';
import Admin from './Pages/Admin';
import Adminpage from './Pages/Adminpage';
import Create from './Pages/Create';
import CourseEdit from './Pages/CourseEdit';
import FooterComp from './Components/FooterComp ';



export const mycontext = createContext("");
const App = () => {
  const [token, setToken] = useState("");
  const [user, setUser] = useState("");

  return (



   <BrowserRouter>
   <mycontext.Provider value={[token, setToken, user, setUser]}>
  <Routes>
    <Route path='/' element={<Signin />} />
    <Route path='/Home' element={<Home />} />
    <Route path='/Signup' element={<Signup />} />
    <Route path='/ContactForm' element={<ContactForm />} />
    <Route path='/Success' element={<Success />} />
    <Route path='/Course' element={<Course  />} />
    <Route path='/quiz' element={<Quiz />} />
    <Route path='/Viewcourse' element={<Viewcourse />} />
    <Route path='/Admin' element={<Admin />} />
    <Route path='/Adminview' element={<Adminpage />} />
    <Route path='/Create' element={<Create />} />
    <Route path="/CourseEdit/:id" element={<CourseEdit />} />
  </Routes>
<FooterComp /> 
  </mycontext.Provider>
  
   </BrowserRouter>
  );
};

export default App;