import React from 'react'
import BlogInner from '../../components/BlogInner';


export const metadata = {
  title: "Vajra Jewels Blog - Insights & Trends",
  description: "Explore the latest jewelry trends, styling tips, and expert insights on the Vajra Jewels Blog.",
};

const blogList = [
  {
    id: 1,
    title: "The Beauty of Natural Diamonds",
    description:
      "Experience the allure of natural diamonds at Vajra Jewels, celebrated for their authentic sparkle and rarity. This article examines the mystique and natural origins of these precious stones.",
    content:
      "At Vajra Jewels, we cherish the unique brilliance of natural diamonds. This comprehensive guide details the natural formation process, the artisanal craftsmanship behind each stone, and why these timeless gems continue to captivate collectors worldwide. Discover the legacy and beauty that make each diamond a true masterpiece.",
    author: "John Doe",
    category: "Diamonds",
    tags: ["natural", "diamond", "luxury", "jewelry", "Vajra Jewels"],
    image: "/img/blogs/1.webp",
    date: "26 March,2025",
    readTime: "8 min read",
    subtitle: "A journey into the origin and splendor of natural diamonds at Vajra Jewels",
    seoDescription:
      "Explore the natural allure of diamonds, their formation and legacy as presented by Vajra Jewels.",
    keywords: ["diamonds", "natural gems", "luxury", "Vajra Jewels"],
    views: 1245,
    likes: 320,
    commentsCount: 12,
    authorBio:
      "John Doe, an expert in fine jewelry at Vajra Jewels, shares his passion for natural diamonds and timeless elegance.",
    updated: "26 March,2025",
  },
  {
    id: 2,
    title: "How to Choose the Perfect Diamond",
    description:
      "Discover Vajra Jewels' expert advice on selecting the ideal diamond. Learn the critical factors that ensure a perfect purchase for every occasion.",
    content:
      "Choosing the right diamond is an art, and Vajra Jewels is here to help. This guide walks you through the essential aspects—cut, clarity, carat, and color—while highlighting ethical sourcing and certification. Our expert tips empower you to make a confident decision that combines beauty with long-term value.",
    author: "Jane Smith",
    category: "Guides",
    tags: ["guide", "diamond selection", "engagement", "jewelry", "Vajra Jewels"],
    image: "/img/blogs/2.webp",
    date: "26 March,2025",
    readTime: "10 min read",
    subtitle: "Expert tips for choosing a diamond that meets your style and values at Vajra Jewels",
    seoDescription:
      "A detailed guide from Vajra Jewels on selecting the perfect diamond, focusing on the critical 4 Cs and ethical purchasing.",
    keywords: ["diamond buying", "guide", "engagement rings", "Vajra Jewels"],
    views: 980,
    likes: 210,
    commentsCount: 8,
    authorBio:
      "Jane Smith, a trusted consultant at Vajra Jewels, specializes in helping clients select exquisite diamonds for every milestone.",
    updated: "26 March,2025",
  },
  {
    id: 3,
    title: "Diamond Jewelry Trends 2024",
    description:
      "Stay ahead with Vajra Jewels' take on 2024's diamond jewelry trends. Uncover the designs and innovations set to redefine luxury.",
    content:
      "In 2024, diamond jewelry is evolving with contemporary aesthetics and sustainable practices. Vajra Jewels presents an insightful look at emerging trends—from streamlined designs to bold artistic statements. Discover how traditional craftsmanship is merged with modern innovation to create pieces that are both timeless and cutting-edge.",
    author: "Emily Johnson",
    category: "Trends",
    tags: ["trends", "jewelry", "innovation", "diamond", "Vajra Jewels"],
    image: "/img/blogs/3.webp",
    date: "26 March,2025",
    readTime: "7 min read",
    subtitle: "Unveiling forward-thinking trends in diamond jewelry for 2024 at Vajra Jewels",
    seoDescription:
      "Explore the latest trends in diamond jewelry for 2024 with Vajra Jewels, merging innovation with classic elegance.",
    keywords: ["trends", "diamond jewelry", "innovation", "2024", "Vajra Jewels"],
    views: 1500,
    likes: 450,
    commentsCount: 15,
    authorBio:
      "Emily Johnson, a trend analyst at Vajra Jewels, brings fresh insights on the future of luxury diamond jewelry.",
    updated: "26 March,2025",
  },
  {
    id: 4,
    title: "Diamond Jewelry Trends 2024",
    description:
      "Discover an alternative perspective on 2024's diamond jewelry trends at Vajra Jewels. Dive into the nuances that make each trend unique and influential.",
    content:
      "Offering a distinct look at the trends for 2024, this article examines unconventional styles, sustainable innovations, and collaborative designs. Vajra Jewels explores how blending tradition with modern flair results in jewelry that stands out in the luxury market, appealing to both classic and contemporary tastes.",
    author: "Alex Turner",
    category: "Trends",
    tags: ["trends", "jewelry", "innovation", "diamond", "Vajra Jewels"],
    image: "/img/blogs/8.webp",
    date: "26 March,2025",
    readTime: "7 min read",
    subtitle: "Alternative insights into diamond jewelry trends for 2024 at Vajra Jewels",
    seoDescription:
      "An alternative look at 2024 trends in diamond jewelry, emphasizing innovative designs and sustainable practices at Vajra Jewels.",
    keywords: ["trends", "diamond jewelry", "innovation", "2024", "Vajra Jewels"],
    views: 1380,
    likes: 410,
    commentsCount: 10,
    authorBio:
      "Alex Turner, a stylist and advisor at Vajra Jewels, offers fresh insights on modern luxury trends.",
    updated: "26 March,2025",
  },
  {
    id: 5,
    title: "Diamond Jewelry Trends 2024",
    description:
      "Experience another facet of 2024's diamond jewelry trends, uniquely curated by Vajra Jewels to inspire your personal style.",
    content:
      "Every trend at Vajra Jewels tells a unique story. This narrative explores the balance between minimalist design and bold embellishments. Discover experimental cuts, innovative techniques, and the fusion of classic and contemporary styles that define 2024's luxury jewelry landscape.",
    author: "Maria Lopez",
    category: "Trends",
    tags: ["trends", "jewelry", "innovation", "diamond", "Vajra Jewels"],
    image: "/img/blogs/9.webp",
    date: "26 March,2025",
    readTime: "7 min read",
    subtitle: "A unique perspective on 2024's diamond jewelry trends by Vajra Jewels",
    seoDescription:
      "Uncover a distinctive narrative of 2024 diamond jewelry trends, blending minimalist and bold designs, exclusively at Vajra Jewels.",
    keywords: ["trends", "diamond jewelry", "innovation", "2024", "Vajra Jewels"],
    views: 1420,
    likes: 430,
    commentsCount: 12,
    authorBio:
      "Maria Lopez, creative director at Vajra Jewels, is passionate about defining modern jewelry trends.",
    updated: "26 March,2025",
  },
  {
    id: 6,
    title: "Diamond Jewelry Trends 2024",
    description:
      "Delve into an in-depth analysis of 2024's diamond jewelry trends as interpreted by the experts at Vajra Jewels, offering a comprehensive overview of market evolution.",
    content:
      "This detailed piece examines the evolution of diamond jewelry in 2024 from a fresh perspective. At Vajra Jewels, our experts analyze the fusion of traditional design with modern innovations, offering predictions and actionable insights that help you stay ahead in the world of luxury fashion.",
    author: "Liam Chen",
    category: "Trends",
    tags: ["trends", "jewelry", "innovation", "diamond", "Vajra Jewels"],
    image: "/img/blogs/10.webp",
    date: "26 March,2025",
    readTime: "7 min read",
    subtitle: "An in-depth analysis of 2024's diamond jewelry trends at Vajra Jewels",
    seoDescription:
      "A comprehensive exploration of evolving diamond jewelry trends for 2024, with expert insights from Vajra Jewels on blending tradition and innovation.",
    keywords: ["trends", "diamond jewelry", "innovation", "2024", "Vajra Jewels"],
    views: 1450,
    likes: 460,
    commentsCount: 18,
    authorBio:
      "Liam Chen, a renowned fashion analyst at Vajra Jewels, specializes in luxury jewelry trends and market dynamics.",
    updated: "26 March,2025",
  },
];




// export function generateStaticParams() {
//   return blogList.map((blog) => ({
//     slug: blog.title.toLowerCase().split(" ").join("-"), 
//   }));
// }


export default function page({params:{slug}}) {
  // const currentBlog=blogList.find((blog,indx)=>(blog.title.toLowerCase().split(" ").join("-")==slug))
  return (
    <div>
      <BlogInner slug={slug}/>
    </div>
  )
}
