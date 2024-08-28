import { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function Categories(){
    const [data, setData] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        axios.get('https://fakestoreapi.com/products/categories')
          .then(response => response.data)
          .then(data => setData(data));
          
        }, []);

        
        const  Categorypage = () => {
          
          navigate('/new-page');
        };
       

        return(     
            <>
            
            <div className='container mt-3'>
            <div className='d-flex flex-row justify-content-around'>
            
            {data.map(item=> (<div  key={item.id}>
           
           <div onClick={Categorypage} id='SelectCategor'> <div class="card btn btn-primary">
              <div class="card-body">
                <h5 class="card-title ">{item}</h5>
                {/* <a class="btn btn-primary">View Products</a> */}
              </div>
            </div></div>
            </div>))}
            </div> 
            </div>
            </>


            )
  
            }

            
             
            
export default Categories;