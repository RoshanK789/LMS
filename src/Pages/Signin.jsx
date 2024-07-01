import React, { useContext, useState } from 'react';
import { Alert,Button,Label,Spinner,TextInput} from 'flowbite-react';
import { Link, useNavigate } from "react-router-dom";
import { HiInformationCircle } from "react-icons/hi";
import { mycontext } from '../App';

const Signin = () => {
    const [formData, setFormData] = useState({});
    const [loading,setLoading] = useState(false)
    const [errorMessage,setErrorMessage] = useState(null);

    const [user, setUser] = useContext(mycontext);

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
                const response = await fetch('https://lms-backend-iy9y.onrender.com/api/auth/login-user',{
                    method:'POST',
                    headers:{
                        'Content-Type':'application/json'
                    },
                    body:JSON.stringify(formData)
                   
                })
               // console.log(response)
                const data = await response.json();
                console.log(data);
                if(data.success === false){
                    return setErrorMessage(data.message)
                }
               
                if(response.ok){
                    localStorage.setItem("Token",data.token); //token from the response is stored in local storage
                    //console.log("data",data.pass)
                    console.log(setUser);
                    setUser(data.pass); //user details from the response is set to user
                    console.log(setUser);
                    navigate('/Home');
                }
            } catch (error) {
              setErrorMessage(error.message)
              setLoading(false)
            }
          };
        
    return (
        <div>
                  <div className="container my-lg-5">
        <div className="row m-auto">
            <div className="col-lg-6  my-lg-5 m-auto col-12" >
                <img src="https://tse4.mm.bing.net/th?id=OIP.mpK0dtxPxPchXtGHdK86qgHaHa&pid=Api&P=0&h=180" className="my-lg-5 mx-lg-5 m-auto"/>
            </div>
            <div className="col-lg-6  my-lg-auto m-auto">
                <h1 className='text-color fw-bolder m-2 fs-5'>Login page</h1>
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
                <h3 className="text-color mx-lg-auto">Don't have account <Link className="fw-bold" to="/Signup"> "Register here"</Link></h3>
                <p className="text-colors mx-lg-auto"><Link to="/Admin">Click here for <b>Admin login</b></Link></p>
            </div>
           
        </div>
      </div>
        </div>
    );
};

export default Signin;