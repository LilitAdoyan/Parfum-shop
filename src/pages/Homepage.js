import React, { useEffect, useState } from 'react'
import Layout from '../components/Layout';
import { collection, addDoc, getDocs } from "firebase/firestore"; 
import fireDB from '../fireConfig';
import {useNavigate} from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import Loader from '../components/Loader';
function Homepage() {
const dispatch=useDispatch();
const [parfums, setParfums]=useState([]);
const [loading, setLoading]=useState(false);
const navigate=useNavigate();
const {cartItems}=useSelector(state=>state.cartReducer)
useEffect(()=>{
  getData();
},[]);
  async function getData(){
    
    try {
      setLoading(true);
    const users= await getDocs(collection(fireDB, "parfums"));
    const parfumsArray=[]
users.forEach((doc) => {
  const obj={
    id:doc.id,
    ...doc.data(),  
  };
  parfumsArray.push(obj);
  setLoading(false);

 
});
setParfums(parfumsArray)
    } catch (error) {
      console.log(error);
      setLoading(false);

    }
   }
const addToCart=(parfum)=>{
dispatch({type:'ADD_TO_CART', payload:parfum})

} 
useEffect(()=>{
  localStorage.setItem('cartItems',JSON.stringify(cartItems))
},[cartItems])

return (
    <Layout loading={loading}>
      <div className='container'>
        <div className='row justify-content-center'>
        {parfums.map((parfum)=>{return (<div className='col-md-4'>
          <div className='m-3 p-1 product position-relative'>
            <div className='product-content'>  <div className='text-center'>            
            <img src={parfum.imageURL} alt='' className='parfum-img'/>
</div>
            <p className='text-center'>{parfum.name}</p>
          
</div>
<div className='product-actions'>
<h2 className='product-price'>{parfum.price} $</h2>
<div className='d-flex' >
  <button className='mx-2' onClick={()=>addToCart(parfum)}>ADD TO CART</button>
<button onClick={()=>{navigate(`/productinfo/${parfum.id}`)}} >VIEW</button>
  </div>


</div>

          </div>
        </div>)})}
        </div>
      </div>
    </Layout>
  )
}

export default Homepage;