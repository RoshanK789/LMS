import React, { useState } from 'react';
import { Alert,Button,Label,Spinner,TextInput} from 'flowbite-react';
import { Link, useNavigate } from "react-router-dom";
import { HiInformationCircle } from "react-icons/hi";

const Signin = () => {
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
                const response = await fetch('https://lms-backend-iy9y.onrender.com/api/auth/Admin',{
                    method:'POST',
                    headers:{
                        'Content-Type':'application/json'
                    },
                    body:JSON.stringify(formData)
                   
                })
                console.log(response)
                const data = await response.json();
                console.log(data);
                if(data.success === false){
                    return setErrorMessage(data.message)
                }
               
                if(response.ok){
                    navigate('/Adminview');
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
            <div className="col-lg-6  my-lg-5 m-auto col-12" >
                <img src="https://tse4.mm.bing.net/th?id=OIP.mpK0dtxPxPchXtGHdK86qgHaHa&pid=Api&P=0&h=180" className="my-lg-5 mx-lg-5 m-auto"/>
            </div>
            <div className="col-lg-6  my-lg-auto m-auto">
                <h1 className='text-color fw-bolder m-2 fs-5'>Admin page</h1>
                <form className="row g-2" onSubmit={handleSubmit}>
                    <div className="col-6 ">
                    <input type="text" placeholder="Email address"  className="form-control" id="mail" onChange={handleChange} />
                    </div>
                    <div className="col-6 ">
                    <input type="Password" placeholder="Password"  className="form-control" id="password" onChange={handleChange} />
                    </div>
                    <div className="">
                    <Button disabled={loading} className="text-white btn-colors text-sm px-5 py-2.5 text-center me-2 mb-2" type='submit'>
                    {loading ? (
                <>
                <Spinner color="purple" aria-label="Purple spinner example" size='sm'/>
                <span className="pl-3">Loading...</span>
                </>
             ) : ( 
                'Sign in'
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
                <h3 className="text-color mx-lg-auto">Don't have account <Link className="fw-bold" to="/Signup">"Logins here"</Link></h3>
                <p className="text-colors mx-lg-auto"><Link to="/">Click here for <b>user login</b></Link></p>

                <p className="fw-bold mx-lg-auto">Note*: for Admin login use this id : admin@gmail.com password : 123456</p>
            </div>
          
        </div>
      </div>
        </div>
    );
};

export default Signin;