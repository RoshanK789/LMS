import React from 'react';
import { Link, useNavigate } from "react-router-dom";
import Header from '../Components/Header';

const Viewcourse = () => {
    const navigate = useNavigate();
    return (
        <div>
          <Header />
          <div> 
          <iframe className='m-auto my-5' width="800" height="400" src="https://www.youtube.com/embed/eIrMbAQSU34?si=Eeq5YgxmOG1mS_df" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
            <section>
            <div className='col-6 m-2'>
            <button className='btn btn-color  fw-bold px-5' onClick={()=>{navigate("/Quiz")}}>Quiz</button>
            </div>
            <div className='col-6 m-2'>
            <button className='btn btn-color  fw-bold px-5' type="button"><a href="https://drive.google.com/file/d/1fBFNZC0NNQuQmf9DZG3Nbw9-wiU7gvd3/viewMaterial">Material</a></button>
            </div>
            </section>
            
          </div>
        </div>
    );
};

export default Viewcourse;