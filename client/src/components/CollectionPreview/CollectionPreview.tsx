import { getProductsByCategory } from '@/api'
import React, { useEffect, useState } from 'react'
import ProductCard from '../ProductCard/ProductCard'

const initialState = {
  data: [],
  isLoading: true,
  error: '',
}

function CollectionPreview({ category }: any) {
  const [products, setProducts] = useState<any>(initialState)

  useEffect(() => {
    getProductsByCategory(category?._id)
      .then((response) =>
        setProducts({ ...products, data: response.data, isLoading: false })
      )
      .catch((error) => console.log(error))
  }, [])
  // console.log(products)
  return (
    <>
      {products.isLoading ? (
        <div className='min-h-[50vh] flex justify-center items-center '>
          <span className='animate-bounce text-primary text-3xl font-bold'>
            Loading...
          </span>
        </div>
      ) : (
        <div className='flex flex-col gap-8'>
          <h2 className='text-2xl font-medium uppercase hover:text-primary transition-colors duration-300 ease-in-out cursor-pointer'>
            {category.name}
          </h2>

          <div className='grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-x-4  gap-y-8'>
            {products.data.map((product: any) => (
              <ProductCard key={product._id} product={product} />
            ))}
          </div>
        </div>
      )}
    </>
  )
}

export default CollectionPreview
