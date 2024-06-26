import React from 'react';
import { Alert,Button,Label,Spinner,TextInput} from 'flowbite-react';
import { Link, useNavigate } from "react-router-dom";
import Header from '../Components/Header';

const Success = () => {
    const navigate = useNavigate();
    const handleSubmit=async()=>{
        navigate("/Home")
    }
        
    return (
        <div>
             <Header />
          <p className='fw-bolder m-2 fs-5 text-center my-5'>Thank's for contact us we will reach you soon!</p>
          <div className="text-center"> 
            <button className='btn btn-primary' onClick={handleSubmit}>Back to Home</button> 
           
        </div> 
        </div>
    );
};

export default Success;