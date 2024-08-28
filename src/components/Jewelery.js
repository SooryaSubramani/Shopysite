import { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import axios from 'axios';

function Jewelery(){
    const [Jewelerydata, setCarouselData] = useState([]);


        useEffect(()=>{
          axios.get('https://fakestoreapi.com/products/category/jewelery')
          .then(response => response.data)
          .then(Jewelerydata => setCarouselData(Jewelerydata));
        },[])
       
        return(     
            <>  

        <div className='d-flex justify-content-center'>
          

            {Jewelerydata.map(item=>(<div  key={item.id}>

              <div class="card">
                  <img src={item.image} class="card-img-top"alt=''/>
                  <div class="card-body">
                    <h5 class="card-title">{item.title}</h5>
                    <p class="card-text">{item.description}</p>
                    <a href="./pay" class="btn btn-primary">Buy</a>
                  </div>
                </div>
            </div>))}
            </div> 
            </>
          )}

export default Jewelery;