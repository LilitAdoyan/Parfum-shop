import React, {useEffect, useState} from 'react'
import { FaTrash } from 'react-icons/fa';
import { Modal } from 'react-bootstrap';
import {useDispatch, useSelector } from 'react-redux'
import Layout from '../components/Layout';
import {addDoc, collection} from 'firebase/firestore';
import fireDB from '../fireConfig';
import {toast} from 'react-toastify';

function Cartpage() {
  const [ totalAmount, setTotalAmount]=useState(0);
  const {cartItems}=useSelector(state=>state.cartReducer);
  const dispatch=useDispatch();
  const [show, setShow] = useState(false);
  const [loading, setLoading]=useState(false)
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [name, setName]=useState('');
  const [address, setAddress]=useState('');
  const [zipcode, setzipcode]=useState('');
  const [phoneNumber, setPhoneNumber]=useState('');

  const deleteFromCart=(parfum)=>{
    dispatch({type:'DELETE_FROM_CART', payload:parfum})
    } 
    useEffect(()=>{
      let temp=0;
      cartItems.forEach((cartItem)=>{
        temp+=cartItem.price
        console.log('hii',temp)
      })
      setTotalAmount(temp)
    },[cartItems])
    useEffect(()=>{
      localStorage.setItem('cartItems',JSON.stringify(cartItems))
    },[cartItems]);
    const placeOrder= async ()=>{
      const addressInfo={
        name, 
        address,
        zipcode,
        phoneNumber
      }
      const orderInfo ={
        cartItems,
        //addressInfo,
        email: JSON.parse(localStorage.getItem('currentUser')).user.email,
        userid: JSON.parse(localStorage.getItem('currentUser')).user.uid, };
    try {
      setLoading(true);
      const result=await addDoc(collection(fireDB, 'orders'), orderInfo);
      setLoading(false);
      toast.success('order placed successfully')
    } catch (error) {
      setLoading(false);
      toast.error('order failed')

    }
    
    }
  return (
    <Layout loading={loading}>
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
        <button onClick={handleShow} className='total-amount mt-5'>
          Place order
        </button>
      </div>
      
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Add your address</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <input type='text' className='form-control' placeholder='name' value={name} onchange={(e)=>{setName(e.target.value)}}/>
          <textarea type='text' className='form-control' placeholder='address' value={address} onchange={(e)=>{setAddress(e.target.value)}}/>
          <input type='number' className='form-control' placeholder='Zip code' value={zipcode} onchange={(e)=>{setzipcode(e.target.value)}}/>
          <input type='number' className='form-control' placeholder='phone number' value={phoneNumber} onchange={(e)=>{setPhoneNumber(e.target.value)}}/>

</Modal.Body>
        <Modal.Footer>
          <button onClick={handleClose}>
            Close
          </button>
          <button onClick={placeOrder}>
            Place Order
          </button>
        </Modal.Footer>
      </Modal>
    </Layout>
  )
}

export default Cartpage;