import { getProductsByCategory } from '@/api'
import React, { useEffect, useState } from 'react'
import ProductCard from '../ProductCard/ProductCard'

function CollectionPreview({ category }: any) {
  const [products, setProducts] = useState<any>([])

  useEffect(() => {
    getProductsByCategory(category?._id)
      .then((response) => setProducts(response.data))
      .catch((error) => console.log(error))
  }, [])
  console.log(products)
  return (
    <div className='flex flex-col justify-center items-center gap-8'>
      <h2 className='text-2xl font-medium uppercase hover:text-primary transition-colors duration-300 ease-in-out cursor-pointer'>
        {category.name}
      </h2>

      <div className='flex flex-wrap gap-8 '>
        {products.map((product: any) => (
          <ProductCard key={product._id} product={product} />
        ))}
      </div>
    </div>
  )
}

export default CollectionPreview
