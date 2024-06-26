
import React from 'react';
import Header from '../Components/Header';
import ContactForm from '../Pages/ContactForm';
import { Navigate, useNavigate } from 'react-router-dom';
const Home = () => {
    const navigate = useNavigate();
    const contactus=()=>
        {
          navigate('/ContactForm');
        }
    return (
      
        <div>
             <Header />

            <section className='row m-5'>
                <div className='col-lg-6 col-12'>
                    <img src="https://www.guvi.in/build/q-BwQ2DSjf.webp"></img>
                </div>
                <div className='col-lg-6 col-12'>
                    <div className='mt-5'>
                        <h1 className='fs-1 fw-bold m-5'>Reputed Edtech platform for Vernacular Languages</h1>
                        <p className='m-5'>Logic is an IIT-M & IIM-A incubated Ed-tech company that focuses on providing personalized learning solutions for its learners right from online learning, upskilling & recruitment opportunities in world-class quality. And, bestow tech-skills with the comfort of your native language</p>
                    </div>
                </div>
            </section>
            <section>
                <div className='container border bg-black '>
                <h1 className='fw-bold fs-1 text-center bg-contact mt-5'>Contact us</h1>
                <div className=' text-center m-5'>
                <button className='btn  btn-color' onClick={()=>{navigate("/ContactForm")}}>Click here</button>
                </div>
                </div>
            </section>

          
        </div>
    );
};

export default Home;