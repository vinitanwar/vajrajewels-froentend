import React from 'react'
import Order from './Order'

const page = ({ params: { slug } }) => {



  return (
   <Order slug={slug} />
  )
}

export default page