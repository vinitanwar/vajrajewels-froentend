"use client"
import React, { useEffect, useState } from "react";
import Link from "next/link";
import axios from "axios";
import { baseurl, imgurl } from "./utils/apis";
export default function NewCategoriesJwellery() {
  const images = [
    {
      src: "//reia.diamonds/cdn/shop/files/Frame_28_500x.png?v=1721820355",
      alt: "Bracelets",
      link: "/collections/bracelets",
    },
    {
      src: "//reia.diamonds/cdn/shop/files/Frame_29_500x.png?v=1721820354",
      alt: "Bangles",
      link: "/collections/bangles",
    },
    {
      src: "//reia.diamonds/cdn/shop/files/Frame_30_500x.png?v=1721820354",
      alt: "Rings",
      link: "/collections/rings",
    },
    {
      src: "//reia.diamonds/cdn/shop/files/Frame_31_500x.png?v=1721820354",
      alt: "Necklaces",
      link: "/collections/necklaces",
    },
    {
      src: "//reia.diamonds/cdn/shop/files/Frame_32_500x.png?v=1721820461",
      alt: "Earrings",
      link: "/collections/earrings",
    },
    {
      src: "//reia.diamonds/cdn/shop/files/Frame_33_500x.png?v=1721820460",
      alt: "Pendant",
      link: "/collections/pendant",
    },
  ];


  const navItems = [
    {
      title: "Jewellery",
      link: "#!",
      listImg: [
        {
          img: "/img/navHoverOuter/Jewellery/1.webp",
          title: "Jewellery 1",
          link: "/collections/rings",
        },
        {
          img: "/img/navHoverOuter/Jewellery/2.webp",
          title: "Jewellery 2",
          link: "/collections/earrings",
        },
        {
          img: "/img/navHoverOuter/Jewellery/3.webp",
          title: "Jewellery 3",
          link: "/collections/rings",
        },
      ],

      subcategories: [
        {
          title: "Rings",
          link: "/collections/rings",
          rings: {
            list: [
              {
                img: "/img/NavHoverInside/rings/1.webp",
                title: "Royal Sapphire Ring",
                link: "/collections/rings",
              },
              {
                img: "/img/NavHoverInside/rings/2.webp",
                title: "Platinum Eternity Band",
                link: "/collections/rings",
              },
              {
                img: "/img/NavHoverInside/rings/3.webp",
                title: "Vintage Emerald Ring",
                link: "/collections/necklaces",
              },
            ],
          },
        },
        {
          title: "Earrings",
          link: "/collections/earrings",
          Earrings: {
            list: [
              {
                img: "/img/NavHoverInside/Earrings/1.webp",
                title: "Diamond Stud Earrings",
                link: "/collections/earrings",
              },
              {
                img: "/img/NavHoverInside/Earrings/2.webp",
                title: "Golden Hoop Earrings",
                link: "/collections/earrings",
              },
              {
                img: "/img/NavHoverInside/Earrings/3.webp",
                title: "Pearl Drop Earrings",
                link: "/collections/earrings",
              },
            ],
          },
        },
        {
          title: "Necklaces",
          link: "/collections/necklaces",
          Necklaces: {
            list: [
              {
                img: "/img/NavHoverInside/Necklaces/1.webp",
                title: "Gold Chain Necklace",
                link: "/collections/necklaces",
              },
              {
                img: "/img/NavHoverInside/Necklaces/2.webp",
                title: "Diamond Pendant Necklace",
                link: "/collections/necklaces",
              },
              {
                img: "/img/NavHoverInside/Necklaces/3.webp",
                title: "Pearl Strand Necklace",
                link: "/collections/necklaces",
              },
            ],
          },
        },
        {
          title: "Bracelets",
          link: "/collections/bracelets",
          Bracelets: {
            list: [
              {
                img: "/img/NavHoverInside/Bracelets/1.webp",
                title: "Cuff Bracelet",
                link: "/collections/bracelets",
              },
              {
                img: "/img/NavHoverInside/Bracelets/2.webp",
                title: "Beaded Bracelet",
                link: "/collections/bracelets",
              },
              {
                img: "/img/NavHoverInside/Bracelets/3.webp",
                title: "Chain Link Bracelet",
                link: "/collections/bracelets",
              },
            ],
          },
        },

        // { title: "Bangles", link: "/collections/bangles" },
        // { title: "Nose Pins", link: "/collections/nose-pins" },
        // { title: "Pendants", link: "/collections/pendants" },
      ],
    },
    {
      title: "Engagement",
      link: "#!",
      listImg: [
        {
          img: "/img/navHoverOuter/Engagement/1.webp",
          title: "Engagement 1",
          link: "/collections/for-him",
        },
        {
          img: "/img/navHoverOuter/Engagement/2.webp",
          title: "Engagement 2",
          link: "/collections/for-her",
        },
        {
          img: "/img/navHoverOuter/Engagement/3.webp",
          title: "Engagement 3",
          link: "/collections/for-him",
        },
      ],
      subcategories: [
        {
          title: "For Him",
          link: "/collections/for-him",
          "for-him": {
            list: [
              {
                img: "/img/NavHoverInside/forHim/1.webp",
                title: "Men's Signet Ring",
                link: "/collections/for-him",
              },
              {
                img: "/img/NavHoverInside/forHim/2.webp",
                title: "Men's Wedding Band",
                link: "/collections/for-him",
              },
              {
                img: "/img/NavHoverInside/forHim/3.webp",
                title: "Men's Chain Bracelet",
                link: "/collections/for-him",
              },
            ],
          },
        },
        {
          title: "For Her",
          link: "/collections/for-her",
          "for-her": {
            list: [
              {
                img: "/img/NavHoverInside/forHer/1.webp",
                title: "Elegant Diamond Ring",
                link: "/collections/for-her",
              },
              {
                img: "/img/NavHoverInside/forHer/2.webp",
                title: "Gold Engagement Ring",
                link: "/collections/for-her",
              },
              {
                img: "/img/NavHoverInside/forHer/3.webp",
                title: "Classic Pearl Ring",
                link: "/collections/for-her",
              },
            ],
          },
        },
      ],
    },
    {
      title: "Gifting",
      link: "#!",
      listImg: [
        {
          img: "/img/navHoverOuter/gift/1.webp",
          title: "gift 1",
          link: "/collections/for-him",
        },
        {
          img: "/img/navHoverOuter/gift/2.webp",
          title: "gift 2",
          link: "/collections/for-him",
        },
        {
          img: "/img/navHoverOuter/gift/3.webp",
          title: "gift 3",
          link: "/collections/for-him",
        },
      ],

      subcategories: [
        {
          title: "For Him",
          link: "/collections/for-him",
          "for-him": {
            list: [
              {
                img: "/img/NavHoverInside/forHim/1.webp",
                title: "Men's Signet Ring",
                link: "/collections/for-him",
              },
              {
                img: "/img/NavHoverInside/forHim/2.webp",
                title: "Men's Wedding Band",
                link: "/collections/for-him",
              },
              {
                img: "/img/NavHoverInside/forHim/3.webp",
                title: "Men's Chain Bracelet",
                link: "/collections/for-him",
              },
            ],
          },
        },
        {
          title: "For Her",
          link: "/collections/for-her",
          "for-her": {
            list: [
              {
                img: "/img/NavHoverInside/forHer/1.webp",
                title: "Elegant Diamond Ring",
                link: "/collections/for-her",
              },
              {
                img: "/img/NavHoverInside/forHer/2.webp",
                title: "Gold Engagement Ring",
                link: "/collections/for-her",
              },
              {
                img: "/img/NavHoverInside/forHer/3.webp",
                title: "Classic Pearl Ring",
                link: "/collections/for-her",
              },
            ],
          },
        },
      ],
    },
    { title: "About ", link: "/about" },
    { title: "products", link: "/all-products" },
    { title: "Contact us", link: "/contact-us" },
  ];
const [categories,setCategories]=useState()



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
    <div className="categories bg-[#f3f1ec]">
      <div className="px-5 md:px-12 xl:px-32  pt-8 md:pt-12 lg:pt-10  container mx-auto">
        <h6 className="text-2xl md:text-3xl xl:text-5xl text-center">
          Vajra Collections
        </h6>

        <div className=" mt-8  ">
          <div className="grid grid-cols-3 md:grid-cols-3 xl:flex xl:justify-between gap-4 md:gap-6">
            {categories?.map((item, index) => (
              <div key={index} className="flex flex-col items-center">
                <Link href={`/collections/${item.title}`} className="h-[90px] w-[90px] md:h-[150px] md:w-[150px]  rounded-full bg-white overflow-hidden">
                  <img
                    src={ `${imgurl}/${item.image}`}
                    alt={item.title}
                    className="w-full h-full rounded-full object-cover"
                  />
                </Link>
                <p className="text-center mt-2 capitalize">{item.title}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
