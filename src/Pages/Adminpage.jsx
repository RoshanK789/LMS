import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, Navigate, useNavigate } from "react-router-dom";

const Adminpage = () => {
  const[id,setId]=useState(0); 
    const navigate = useNavigate();
const [data,SetData]=useState({Coursename:"",price:"",courseimage:""})
const [modal,SetModal]=useState(false);
      const [course, setCourse] = useState([]);
      useEffect(() => {
        fetchData();
      });
      const fetchData = async () => {
        await axios
          .get("http://localhost:5000/api/user/get")
          .then((res) => setCourse(res.data))
          .catch((error) => console.log(error));
      };
    const handledelete=async(id)=>
      {
        console.log(id);
        await axios
        .delete(`http://localhost:5000/api/user/delete/${id}`)
        .then((res) => setCourse(res.data))
        .catch((error) => console.log(error));
        location.reload();
      }


  return (
    <div>
        <div>
           <button onClick={()=>{navigate("/create")}}>Add new</button>
           <button  className="float-right" onClick={()=>{navigate("/")}}>Login page</button>
        </div>
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
                          
                            <button  id="btn" className='p-2 btn btn-danger' onClick={()=>handledelete(element._id)}>delete</button>
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

export default Adminpage;