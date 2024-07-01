import React, { useState } from 'react';
import { Alert,Button,Label,Spinner,TextInput} from 'flowbite-react';
import { Link, useNavigate } from "react-router-dom";
import { HiInformationCircle } from "react-icons/hi";
import Header from '../Components/Header';

const Signup = () => {
    const [formData, setFormData] = useState({});
    const [loading,setLoading] = useState(false)
    const [errorMessage,setErrorMessage] = useState(null);
    const navigate = useNavigate();
    const handleChange = (e) => {
       
        setFormData({ ...formData, [e.target.id]: e.target.value.trim() });
        //console.log(formData);
      };
    
    const handleSubmit=async(e)=>
        {

            e.preventDefault();
            if(!formData.mail || !formData.phonenumber||!formData.Query||!formData.name){
                return setErrorMessage("please fill out the fields");
            }
            try {
                setLoading(true);
                setErrorMessage(null);
                const response = await fetch('https://lms-backend-iy9y.onrender.com/api/auth/contactform-user',{
                    method:'POST',
                    headers:{
                        'Content-Type':'application/json'
                    },
                    body:JSON.stringify(formData)
                })
                console.log(response.ok)
                if(response.ok){
                    navigate('/Success');
                }
            } catch (error) {
              setErrorMessage(error.message)
              setLoading(false)
            }
          };
        
    return (
        
        <div>
            <Header />
                  <div className="container  mt-5 width">

            <div className="col-lg-6  my-lg-auto m-auto">
                <h1 className='text-color fw-bolder m-2 fs-5'>Contact form</h1>
                <form className="row g-2" onSubmit={handleSubmit}>
                  
                    <input type="text" placeholder="Name"  className="form-control my-lg-3" id="name" onChange={handleChange} />
                    <input type="text" placeholder="mail"  className="form-control my-lg-3" id="mail" onChange={handleChange} />
                    <input type="text" placeholder="Phone Number"  className="form-control my-lg-3" id="phonenumber" onChange={handleChange} />
                    <input type="Text" placeholder="Query"  className="form-control my-lg-3" id="Query" onChange={handleChange} />
                
                    <div className="">
                    <Button disabled={loading} className="text-white btn-colors text-center me-2 mb-2" type='submit'>
                    {loading ? (
                <>
                <Spinner color="purple" aria-label="Purple spinner example" size='sm'/>
                <span className="pl-3">Loading...</span>
                </>
             ) : ( 
                'Send a query'
             )
            }
                    </Button>
                    
                    </div>
                    
                </form>
                {errorMessage && (
                    
          <Alert color="failure" icon={HiInformationCircle} className="mt-5">
            
            <span className="font-medium me-2">🥴OOPS!</span>{errorMessage}
          </Alert>
          )}
               
            </div>
           
        </div>
      </div>
       
    );
};

export default Signup;