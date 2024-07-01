import { Navbar, NavbarCollapse } from 'flowbite-react';
import React, { useContext }  from 'react';
import { Link, NavLink, useLocation, useNavigate } from 'react-router-dom';
import { mycontext } from '../App';

const Header = () => {
    const navigate = useNavigate();
    const token = localStorage.getItem("Token");
    const [user, setUser] = useContext(mycontext);
    const handleSignout = () => {
        localStorage.removeItem(token); //token is removed from local storage
        console.log(token); 
        setUser(""); //user data is set empty
        navigate("/");
      };
    const path=useLocation().pathname; 
    return (
        <div>
            
            <Navbar className='border-b-2 navbar'>
           
                <Navbar.Toggle/>
                <Navbar.Collapse>
                
               <Navbar.Link active={path==='/Home'}>
               <Link to='/Home'>
                <span className='fw-bold fs-3'>Home</span>
                </Link>
               </Navbar.Link>
                
               <Navbar.Link active={path==='/Course'}>
               <Link to='/Course'>
                <span className='fw-bold fs-3'>Course</span> 
                </Link>
               </Navbar.Link> 
               <Navbar.Link active={path==='/ContactForm'}>
               <Link to='/ContactForm'>
                <span className='fw-bold fs-3'>Contact us</span>
                </Link>
               </Navbar.Link>
               
                </Navbar.Collapse>
               
               
                <span onClick={handleSignout} className='fw-bold fs-3'>Log out</span>
                
             
            </Navbar>
        </div>
    );
};

export default Header;