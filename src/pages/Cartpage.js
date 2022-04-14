import React, {useEffect} from 'react'
import { FaApple, FaTrash } from 'react-icons/fa';
import {useDispatch, useSelector } from 'react-redux'
import Layout from '../components/Layout'
function Cartpage() {
  const {cartItems}=useSelector(state=>state.cartReducer);
  const dispatch=useDispatch();

  const deleteFromCart=(parfum)=>{
    dispatch({type:'DELET_FROM_CART', payload:parfum})
    
    } 
    useEffect(()=>{
      localStorage.setItem('cartItems',JSON.stringify(cartItems))
    },[cartItems])
  
  return (
    <Layout>
      <table className='table mt-2'>
        <thead>
         <tr>
         <th>Image</th>
           <th>Name</th>
         <th>Price</th>
         <th>Action</th></tr>
        </thead>
        <tbody>
          {cartItems.map(item=>{
            
            return ( <tr>
              <td>
                <img src={item.imageURL} alt={item.name} height='80' width='80'/>
              </td>
              <td>{item.name}</td>
              <td>{item.price}</td>
              <td><FaTrash onClick={()=>{deleteFromCart(item)}}/></td>
            </tr>);
          })}
        </tbody>
      </table>
    </Layout>
  )
}

export default Cartpage;