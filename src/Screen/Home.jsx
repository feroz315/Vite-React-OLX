import React,{ useState,useEffect} from 'react';
import axios from 'axios';
import Cards from '../Components/Card';
import HeaderBar from '../Components/HeaderBar';



const Home = () =>  {
const [data,setData] = useState([]);
  
useEffect(() => {
    getapi();
},[])

const getapi = async () => {
try {
    const res = await axios.get('https://dummyjson.com/products')
    console.log(res.data.products)
    setData(res.data.products)
} catch (error) {
    console.log("error",error)
}

}

return (
 <div>
    <HeaderBar />
    <div className='d-flex gap-3 flex-wrap'>
    {data.map((item,i) => 
    <Cards key={i} 
    title={item.title} 
    thumbnail={item.thumbnail} 
    description={item.description}
    id={item.id}
    price={item.price}
    category={item.category}
    brand={item.brand}
    discountPercentage={item.discountPercentage}
    rating={item.rating}
    stock={item.stock}
    
    />)}
    
    
     </div>
    </div>
  )
}


export default Home;