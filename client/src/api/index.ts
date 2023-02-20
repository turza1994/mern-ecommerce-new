import axios from 'axios'

const url = 'http://localhost:5000'

const email = {
  headers: { 'x-access-user': 'mazba.turza@gmail.com' },
}

export const getCategories = () => axios.get(`${url}/api/categories/`)
export const getProductsByCategory = (categoryID: string) =>
  axios.get(`${url}/api/products?categoryID=${categoryID}`)
export const loadMoreProducts = () => axios.get(`${url}/products`)
export const getOrders = () => axios.get(`${url}/order`)
export const createOrder = (newOrder: any) =>
  axios.post(`${url}/order`, newOrder, email)
