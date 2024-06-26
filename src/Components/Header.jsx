import { Navbar, NavbarCollapse } from 'flowbite-react';
import React from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';

const Header = () => {
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
               
               <Link to='/'>
                <span className='fw-bold fs-3'>Log out</span>
                </Link>
             
            </Navbar>
        </div>
    );
};

export default Header;