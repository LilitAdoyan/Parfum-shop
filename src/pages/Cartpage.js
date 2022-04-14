import React, {useEffect, useState} from 'react'
import { FaApple, FaTrash } from 'react-icons/fa';
import {useDispatch, useSelector } from 'react-redux'
import Layout from '../components/Layout'
function Cartpage() {
  const [ totalAmount, setTotalAmount]=useState(0);
  const {cartItems}=useSelector(state=>state.cartReducer);
  const dispatch=useDispatch();

  const deleteFromCart=(parfum)=>{
    dispatch({type:'DELETE_FROM_CART', payload:parfum})
    
    } 
    useEffect(()=>{
      let temp=0;
      cartItems.forEach((cartItem)=>{
        temp+=cartItem.price
      })
      setTotalAmount(temp)
    },[cartItems])
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
      <div classname='d-flex justify-content-end'>
        <h1 className='total-amount'>
          Total amount = {totalAmount}$
        </h1>
      </div>
      <div classname='d-flex justify-content-end'>
        <button className='total-amount mt-5'>
          Place order
        </button>
      </div>
    </Layout>
  )
}

export default Cartpage;