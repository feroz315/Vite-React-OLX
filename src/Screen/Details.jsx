import axios from 'axios';
import React, { useEffect ,useState} from 'react'
import { useParams } from 'react-router-dom';
import PermIdentityIcon from '@mui/icons-material/PermIdentity';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';



function Details() {
  const {id } = useParams()
  console.log("work",id)

const [productdata, setProdductData ] = useState(null)


useEffect(() => {
  getId()
},[])


const getId = async () => {
try {
  const res = await axios.get(`https://fakestoreapi.com/products/${id}`)
  console.log(res.data);
  setProdductData(res.data)
  
} catch (error) {
  console.log("error",error);
}
 console.log("products",productdata) 
}
  
return (
    <div>
    <div className='d-flex gap-3 flex-wrap'>
     <h2>Product Details</h2>

     <div className='d-flex gap-3 flex-wrap'>
    <PermIdentityIcon fontSize='large' />
    <p>Login</p>
    </div>
    
    <div className='d-flex gap-3 flex-wrap'>
    <ShoppingCartOutlinedIcon fontSize='large'/>   
    <p>Rs.0</p>    
    </div>


    </div>
    <div>
    <img src={productdata?.image} style={{width:'200px' }}/>
    <h3>{productdata?.title}</h3>
    <p>{productdata?.description.slice(0,40)}</p>
    </div>
    
    </div>
  )
}

export default Details;