import React, { useState } from 'react';
import { Alert,Button,Label,Spinner,TextInput} from 'flowbite-react';
import { Link, useNavigate } from "react-router-dom";
import { HiInformationCircle } from "react-icons/hi";

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
            if(!formData.mail || !formData.password){
                return setErrorMessage("please fill out the fields");
            }
            try {
                setLoading(true);
                setErrorMessage(null);
                const response = await fetch('https://lms-backend-iy9y.onrender.com/api/auth/register-user',{
                    method:'POST',
                    headers:{
                        'Content-Type':'application/json'
                    },
                    body:JSON.stringify(formData)
                })
                const data = await response.json();
                if(data.success === false){
                    return setErrorMessage(data.message)
                }
                if(response.ok){
                    navigate('/');
                }
            } catch (error) {
              setErrorMessage(error.message)
              setLoading(false)
            }
          };
        
    return (
        <div>
                  <div className="container">
        <div className="row m-auto">
            <div className="col-lg-6  my-lg-5" >
                <img src="https://tse4.mm.bing.net/th?id=OIP.mpK0dtxPxPchXtGHdK86qgHaHa&pid=Api&P=0&h=180" className="my-lg-5 mx-lg-5"/>
            </div>
            <div className="col-lg-6  my-lg-auto m-auto">
                <h1 className='text-color fw-bolder m-2 fs-5'>New User Register</h1>
                <form className="row g-2" onSubmit={handleSubmit}>
                    <div className="col-6 ">
                    <input type="text" placeholder="Email address"  className="form-control" id="mail" onChange={handleChange} />
                    </div>
                    <div className="col-6 ">
                    <input type="Password" placeholder="Password"  className="form-control" id="password" onChange={handleChange} />
                    </div>
                    <div className="">
                    <Button disabled={loading} className="text-white btn-colors text-center me-2 mb-2" type='submit'>
                    {loading ? (
                <>
                <Spinner color="purple" aria-label="Purple spinner example" size='sm'/>
                <span className="pl-3">Loading...</span>
                </>
             ) : ( 
                'Sign Up'
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
                <h3 className="text-color mx-lg-auto">Already have account <Link className='fw-bold' to="/">"Login here"</Link></h3>
            </div>
           
        </div>
      </div>
        </div>
    );
};

export default Signup;