import { getCategories } from '@/api'
import React, { useEffect, useState } from 'react'
import CollectionPreview from '../CollectionPreview/CollectionPreview'

const ShopPreview = () => {
  const [categories, setCategories] = useState<any>([])
  useEffect(() => {
    getCategories()
      .then((response) => setCategories(response.data))
      .catch((error) => console.log(error))
  }, [])
  console.log(categories)

  return (
    <div className=' flex flex-col gap-8'>
      {categories.map((category: any) => (
        <CollectionPreview key={category._id} category={category} />
      ))}
    </div>
  )
}

export default ShopPreview
