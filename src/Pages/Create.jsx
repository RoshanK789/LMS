import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Create = () => {
  const navigate = useNavigate();
  const [createData, setCreateData] = useState({
    Coursename:"",courseimage:"",price:""
  });
  const handleChange = (e) => {
    const { name, value } = e.target;


    console.log(createData);
    
      setCreateData((prevState) => ({
        ...prevState,
        [name]: value,
      }));
    } 
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    await axios
      .post(`https://lms-backend-iy9y.onrender.com/api/user/create`, createData)
      .then((res) => console.log(res.data))
      .catch((error) => console.log(error));

    
  };
  return (
    <div>
      <div className="container mt-5">
        <form className="row g-3" onSubmit={handleSubmit}>
          <div className="col-md-6">
            <label className="form-label">Course Name</label>
            <input
              type="text"
              className="form-control"
              name="Coursename"
              value={createData.Coursename}
              onChange={handleChange}
            />
          </div>
          <div className="col-6">
            <label className="form-label">Image</label>
            <input
              type="text"
              className="form-control"
              name="courseimage"
              value={createData.courseimage}
              onChange={handleChange}
            />
          </div>
          <div className="col-md-6">
            <label className="form-label">Price</label>
            <input
              type="text"
              className="form-control"
              name="price"
              value={createData.price}
              onChange={handleChange}
            />
          </div>
          
        

          <div className="col-12">
            <button type="submit" className="btn btn-primary">
              Add
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Create;