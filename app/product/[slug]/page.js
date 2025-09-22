import React from "react";
import ProductDetails from "./ProductDetails";
import list from "../../data";

export const generateStaticParams = async () => {
  return list.map((product) => ({
    slug: product.title.toLowerCase().replace(/,/g, "").split(" ").join("-"),
  }));
};
export default function page({ params: { slug } }) {

  return (
    <div>
      <ProductDetails slug={slug} />
    </div>
  );
}
