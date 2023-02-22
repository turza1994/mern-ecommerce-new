import { getCategories } from '@/api'
import React, { useEffect, useState } from 'react'
import CollectionPreview from '../CollectionPreview/CollectionPreview'

const initialState = {
  data: [],
  isLoading: true,
  error: '',
}

const ShopPreview = () => {
  const [categories, setCategories] = useState<any>(initialState)

  useEffect(() => {
    getCategories()
      .then((response) =>
        setCategories({ ...categories, data: response.data, isLoading: false })
      )
      .catch((error) => console.log(error))
  }, [])

  return (
    <>
      {categories.isLoading ? (
        <div className='min-h-[50vh] flex justify-center items-center '>
          <span className='animate-bounce text-primary text-3xl font-bold'>
            Loading...
          </span>
        </div>
      ) : (
        <div className=' flex flex-col gap-8'>
          {categories.data.map((category: any) => (
            <CollectionPreview key={category._id} category={category} />
          ))}
        </div>
      )}
    </>
  )
}

export default ShopPreview
