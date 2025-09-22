"use client"
import React,{useState,useEffect} from 'react'
import Link from 'next/link';
import axios from 'axios';
import { baseurl } from '@/app/components/utils/apis';


export default function ProductType() {



  


const [categorys,setCategories]=useState()



const fetchcategory=async()=>{
  const response = await axios.get(`${baseurl}/categories`)
  const data = await response.data;
  if(data.success){
    setCategories(data.categories)
  }
}



useEffect(()=>{
  fetchcategory()
},[])


      
  return (
    <div className='grid grid-cols-1  gap-y-2'>
      {categorys?.map((item,index) => (
        <Link key={index} href={`/collections/${item.title}`}>
 
      {item.title} <span className="text-gray-500">({item.title})</span>
  </Link>
))}

    </div>
  )
}
