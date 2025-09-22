"use client";
import React, { useEffect, useState } from "react";
import list from "@/app/data";
import ReactImageMagnify from "react-image-magnify";
import Link from "next/link";
import { FaGreaterThan } from "react-icons/fa6";
import ImageMagnifier from "@/app/components/ImageMagnifier";
import Description from "./Description ";
import data from "../../data";
import ProductCard from "@/app/components/ProductCard";
import { addToCart } from "@/app/store/cartSlice";
import { useDispatch } from "react-redux";
import axios from "axios";
import { baseurl, imgurl } from "@/app/components/utils/apis";
import { useRouter } from "next/navigation";

const ProductDetails = ({ slug }) => {
  const dipatch = useDispatch();
const route = useRouter()
 

  const [activeImg, setActiveImg] = useState();



  const [qnty, setQnty] = useState(1);
  const [product,setProduct]=useState()
  const [allproduct,setAllproduct]=useState()



const fetchProduct=async()=>{
  const response = await axios.get(`${baseurl}/getsingleproduct/${slug}`);
  const data = await response.data;
  if(data.success){
    setProduct(data.product)
    setActiveImg(data.product?.innerimages[0])
    fetchProducts(data.product.category_id)
  }
}

const AddtoCart=async(productprice,productid)=>{
 try {
   const response = await axios.post(`${baseurl}/cart`,{product_id:productid,amount:productprice},{
    withCredentials:true
  })
  const data = await response.data;
  if(data.success){
route.push("/cart")
  }
  else{
   route.push("/user/login")
 
  }
 } catch (error) {
   route.push("/user/login")
 }
}


const fetchProducts= async(cat)=>{

  const response = await axios.get(`${baseurl}/products?catid=${cat}`)
const data = await response.data;
if(data.success){
setAllproduct(data.products)

}
}

useEffect(()=>{
  
  fetchProduct()
},[])

  
  return (
    <>
      {/* <div className="bg-gradient-to-r from-[#E5D6C6] to-[#CBA78A]">
        <div className="container mx-auto h-[20vh] lg:h-[40vh] flex flex-col justify-center items-center w-full  py-16 px-6 md:px-16 xl:px-40 text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl  text-gray-800 uppercase">
            {slugProduct.name}
          </h1>

          <div className="flex items-center justify-center gap-x-2 mt-4 text-gray-700 text-sm md:text-base">
            <Link href="/" className="hover:text-gray-900 transition">
              Home
            </Link>
            <FaGreaterThan className="text-xs opacity-70" />
            <span className="font-medium text-gray-900">
              {slugProduct.name}
            </span>
          </div>
        </div>
      </div> */}

      <div className="bg-[#F3F1EC]">
        <div className="container mx-auto">
          <div className=" w-full py-10 lg:py-16 px-5 md:px-12 xl:px-32 flex flex-col xl:flex-row  items-center ">
            <div className="leftside w-full  flex flex-col md:flex-col-reverse lg:flex-row gap-5 items-center ">
           <div className="sideimages flex lg:flex-col gap-2 h-[31rem] overflow-auto p-2 scrollbar-thin scrollbar-thumb-yellow-500/70 scrollbar-track-gray-200 rounded-lg">
  {product?.innerimages?.map((elm, index) => (
    <div
      key={index}
      onClick={() => setActiveImg(elm)}
      className="cursor-pointer group w-[100px] sm:w-[120px] md:w-[150px] h-[100px] sm:h-[120px] lg:h-[160px] xl:h-[150px] border border-yellow-500/50 rounded-lg overflow-hidden transition-all duration-300 hover:scale-105 hover:border-yellow-500 shadow-sm hover:shadow-md"
    >
      <img
        src={`${imgurl}/${elm}`}
        alt={`Side image ${index}`}
        className="w-full h-full object-cover group-hover:opacity-90"
      />
    </div>
  ))}
</div>



              <div className="mainimage">
                <ImageMagnifier activeImg={activeImg} />
              </div>
            </div>

            <div className="rightside w-full xl:w-[70%] flex justify-center  mt-5 md:mt-0 p-5">
              <div className="">
                <h1 className="text-3xl font-semibold">{product?.title}</h1>
                <p className="text-xl text-red-500 font-semibold mt-2">
                  ₹ {product?.price}
                </p>
                <p className="text-sm text-red-600 mt-1">
                  🔥 30 items sold in last 14 hours
                </p>
                <p className="text-gray-600 mt-4">{product?.title}</p>

                <div className="mt-6 flex flex-col gap-4">
                  {/* <div className="flex items-center border border-gray-400 rounded-lg w-max px-4 py-2">
                    <button
                      onClick={() => (qnty > 1 ? setQnty(qnty - 1) : null)}
                      className="px-3"
                    >
                      -
                    </button>
                    <span className="px-4">{qnty}</span>
                    <button onClick={() => setQnty(qnty + 1)} className="px-3">
                      +
                    </button>
                  </div> */}

                  
                  <div className="flex gap-3">
                    <button
                      onClick={() =>AddtoCart(product?.price,product?.id)
                      }
                      
                      className="w-[200px] text-center bg-black text-white py-3 rounded-lg hover:bg-gray-800"
                    >
                      ADD TO CART
                    </button>
                    <button className="w-[200px] border border-gray-400 py-3 rounded-lg hover:bg-gray-200">
                      BUY IT NOW
                    </button>
                  </div>
                </div>

                <div className="mt-6 text-gray-700">
                  <p className="flex items-center gap-2 font-semibold">
                    🚚 Estimated delivery:{" "}
                    <span className="font-normal">
                      5-7 Days from order date.
                    </span>
                  </p>
                  <p className="flex items-center gap-2 font-semibold mt-2">
                    📦 Free Shipping & Returns:{" "}
                    <span className="font-normal">On orders above $79</span>
                  </p>
                  <div className=" mt-3">
                    <img
                      src="/img/payments/Payements.webp"
                      className="w-[50%]"
                      alt="payments"
                    />
                  </div>
                </div>

                <p className="mt-6 flex items-center gap-2 font-semibold">
                  📝 About your query!
                </p>
              </div>
            </div>
          </div>

          <div className="product-Description">
            <Description  description={product?.description}  details={product?.details}  return_policy={product?.return_policy}  shipping={product?.shipping} />
          </div>

          <div className="related-product py-10  px-5 md:px-12 xl:px-32">
            <h5 className="text-2xl md:text-3xl lg:text-4xl text-center ">
              Related Products
            </h5>

            <div className="grid grid-cols-1 gap-y-8 gap-x-4 md:grid-cols-3 xl:grid-cols-4 mt-4 lg:mt-8">
              {allproduct?.map((product) => (
                <ProductCard product={product} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductDetails;
