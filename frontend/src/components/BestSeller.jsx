import React,{useState,useContext,useEffect} from 'react'
import { ShopContext } from '../context/ShopContext'
import Title from '../components/Title'
import ProductItem from '../components/ProductItem'

const BestSeller = () => {
    const {products}=useContext(ShopContext);
    const [bestSeller,setBestSeller]=useState([]);

    useEffect(()=>{
      const bestProduct=products.filter((item)=>(item.bestseller));
      setBestSeller(bestProduct.slice(0,5))
    },[products])
  return (
    <div className='my-10'>
        <div className='text-center text-3xl py-8'>
            <Title text1={'BEST'} text2={'SELLERS'}/>
            <p className='w-3/4 m-auto text-xs sm:text-sm md:text-base text-gray-600'>
            Check out our best sellers, loved by customers for their unmatched quality and style. These top-rated products are must-haves for any wardrobe. Shop now and experience the perfect blend of fashion and function
            </p>

        </div>
        <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 gap-y-6'>
            {
                bestSeller.map((item,index)=>(
                    <ProductItem key={index} id={item._id} name={item.name} image={item.image} price={item.price}/>
                  ))

            }
            
        </div>
      
    </div>
  )
}

export default BestSeller
