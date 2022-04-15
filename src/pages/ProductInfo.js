import React, {useState,useEffect} from 'react'
import Layout from '../components/Layout';
import fireDB from '../fireConfig';
import {getDoc, doc } from "firebase/firestore"; 
import { useParams } from 'react-router';


function ProductInfo() {
const [parfum, setParfum]=useState();
const [loading, setLoading]=useState(false);

const params=useParams();
  useEffect(()=>{
    getData();
  },[]);

  async function getData(){
    try {
      setLoading(true);
    const parfumTemp= await getDoc(doc(fireDB, "parfums", params.parfumid));
    
setParfum(parfumTemp.data());
setLoading(false)
    } catch (error) {
      console.log(error);
      setLoading(false)

    }
   }
 
  return (
    <Layout loading={loading}><div className='container'>
<div className='row justify-content-center'>
  <div className='col-md-8'>    {parfum&&(<div><p><b>{parfum.name}</b></p>
    <img src={parfum.imageURL} alt='' className='product-info-img'/>
    <hr/>
<p>{parfum.description}</p>
<div className='d-flex justify-content-end my-3'>
  <button>ADD TO CART</button>
</div>
    </div>)}</div>
</div>
</div></Layout>
  )
}

export default ProductInfo