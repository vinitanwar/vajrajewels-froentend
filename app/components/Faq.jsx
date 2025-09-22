"use client"
import { useState } from "react";
import { FaPlus, FaMinus } from "react-icons/fa";

const faqs = [
  {
    number: "01",
    question: "What are lab-grown diamonds?",
    answer:
      "Lab-grown diamonds are ethically created diamonds that possess the same brilliance, durability, and composition as natural diamonds. These diamonds are crafted in state-of-the-art laboratories using advanced technology that replicates natural diamond formation. At Vajra Jewels, we offer exquisite lab-grown diamond jewelry that embodies luxury, sustainability, and elegance.",
  }, 
  {
    number: "02",
    question: "Are lab-grown diamonds 'REAL' diamonds?",
    answer:
      "Yes, lab-grown diamonds are 100% real diamonds. They have the same physical, chemical, and optical properties as mined diamonds. Even expert gemologists cannot distinguish them without specialized equipment. Choosing Vajra Jewels’ lab-grown diamond rings means embracing ethical beauty without compromising on authenticity or quality.",
  },
  {
    number: "03",
    question: "Are lab-grown diamonds the same as cubic zirconia or moissanite?",
    answer:
      "No, lab-grown diamonds are genuine diamonds, unlike cubic zirconia or moissanite, which are diamond alternatives. Cubic zirconia is a synthetic material, and moissanite is a distinct mineral with different properties. Vajra Jewels' lab-grown diamonds are graded and certified as real diamonds, ensuring you receive the finest quality with unmatched brilliance.",
  },
  {
    number: "04",
    question: "What is Vajra Jewels’ Insta-Shine Service?",
    answer:
      "The Vajra Jewels Insta-Shine Service provides instant cleaning and polishing for your lab-grown diamond jewelry, keeping it sparkling like new. Whether for everyday wear or special occasions, this service ensures your jewelry always radiates brilliance and elegance.",
  },
  {
    number: "05",
    question: "How are lab-grown diamonds created?",
    answer:
      "Lab-grown diamonds are produced using two primary methods: High Pressure High Temperature (HPHT) and Chemical Vapor Deposition (CVD). Both techniques mimic natural diamond formation, resulting in real diamonds with identical physical and chemical properties to mined diamonds.",
  },
  {
    number: "06",
    question: "Do lab-grown diamonds have certifications?",
    answer:
      "Yes, all Vajra Jewels' lab-grown diamonds are graded and certified by internationally recognized gemological labs such as IGI and GIA. These certifications ensure authenticity, quality, and precise diamond grading, just like mined diamonds.",
  },
];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState(0);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="w-full bg-[#F3F1EC] pb-6 md:py-6 lg:pb-12">
      <div className="text-center mb-8 xl:pb-10 px-6">
        <p className="text-lg md:text-xl text-gray-800">Explore</p>
        <h2 className="text-2xl md:text-3xl lg:text-4xl italic text-gray-900">
          Answers to Your Diamond Queries
        </h2>
      </div>

      <div className="container mx-auto px-5 md:px-12 xl:px-32 flex flex-col md:flex-row gap-8 md:gap-12 items-start">
        {/* Image Section */}
        <div className="w-full md:w-1/3 flex justify-center">
          <img
            src="/img/faq/faq.webp"
            alt="Jewelry"
            className="w-full h-[300px] sm:h-[400px] object-cover rounded-lg shadow-md"
          />
        </div>

        {/* FAQ Section */}
        <div className="w-full md:w-2/3">
          {faqs.map((elm, index) => (
            <ul
              key={index}
              onClick={() => toggleFAQ(index)}
              className="border-b cursor-pointer"
            >
              <div className="flex justify-between items-center text-lg md:text-xl py-4">
                <div className="flex text-xl items-start md:items-center space-x-3">
                  <span className="font-bold text-gray-700">{elm.number}</span>
                  <h6 className="font-medium  text-gray-900">{elm.question}</h6>
                </div>
                <span className="duration-200 transition-all text-gray-700">
                  {openIndex === index ? <FaMinus /> : <FaPlus />}
                </span>
              </div>

              {/* Answer Section */}
              <div
                className={`transition-all duration-300 overflow-hidden ${
                  openIndex === index
                    ? "max-h-[300px] opacity-100 py-2"
                    : "max-h-0 opacity-0"
                }`}
              >
                <p className="text-gray-600 text-justify text-base">{elm.answer}</p>
              </div>
            </ul>
          ))}
        </div>
      </div>
    </div>
  );
}
