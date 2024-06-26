import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, Navigate, useNavigate } from "react-router-dom";
import Header from "../Components/Header";
import { Alert } from "flowbite-react";

const Course = () => {
 

  const Buy=async (id)=>
    {
      alert("stripe is not for india and also razpay ask a kyc verification so i will not use the payment gateway")
      await axios
      .put(`http://localhost:5000/api/user/buy/${id}`)
      .then((res) => setCourse(res.data))
      .catch((error) => console.log(error));
      location.reload();
      alert("Successfully buyed a course")
    }
    const view=()=>
      {
        navigate('/Viewcourse');
      }
const navigate = useNavigate();
  const [course, setCourse] = useState([]);
  useEffect(() => {
    fetchData();
    console.log(fetchData)
  });
  const fetchData = async () => {
    await axios
      .get("http://localhost:5000/api/user/get")
      .then((res) => setCourse(res.data))
      .catch((error) => console.log(error));
  };

  return (
    <div>
      <Header />
       <div className="row row-cols-1 row-cols-md-3 g-4 mx-auto my-auto  ">
                {course.map((element,index)=>
                {
                    return(
                      <div key={index}>    
                      <div className="col h-100">
                        <div className="card h-100">
                          <img src={element.courseimage} className="card-img-top" alt="..."/>
                          <div className="card-body">
                            <h5 className="card-title">{element.Coursename}</h5>
                            <p className="card-text">Price : {element.price}</p>
                            <button  id="btn" className='p-2 btn btn-danger'onClick={()=>
                            {if(element.isbuy=='true')
                             {view() }
                             else{
                                  console.log("hi");
                                  Buy(element._id);}
                            }
                            }>{(element.isbuy=='true')?"View course":"Buy course"}</button>
                          </div>
                        </div>
                      </div>
                      </div>
                    )
                })}
       </div>
    </div>
  );
};

export default Course;