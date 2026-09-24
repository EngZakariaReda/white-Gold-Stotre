import { Eye } from 'lucide-react'
import React from 'react'
import { Link } from 'react-router'

export default function ProductCard({product}) {
  return (
    <div className='w-full border hover:border-(--primary)'>

        <div className="w-full h-70 overflow-hidden">
            <img src={product.image} alt="product photo" className='w-full h-full object-cover hover:scale-110 transition-all ease-in-out duration-300'/>
        </div>

        <div className='flex flex-col gap-3 p-4 bg-(--lighterbackground)'>
            <h2 className='text-white text-xl font-extrabold'> {product.name}  </h2>
            <p className='text-(--secondary-card) text-sm'> {product.category} </p>
            <Link to={"/product"} className="flex gap-2 justify-center items-center text-(--secondary-text) bg-(--backgroundcard) w-full p-4" >
                عرض التفاصيل
                <Eye />
            </Link>
        </div>
    </div>
  )
}
