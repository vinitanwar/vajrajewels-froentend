import Link from "next/link";
import React from 'react'
import { FaGreaterThan } from 'react-icons/fa6'

export default function TermsCondition() {
  return (
    <>
        <div className="relative text-white">
        <div className="bg-cover bg-center bg-no-repeat relative bg-[url('/img/heroSection/2swiper.webp')] h-[25vh] md:h-[35vh]   xl:h-[40vh] flex flex-col justify-center items-center">

            {/* Overlay */}
            <div className="absolute inset-0 bg-black/30"></div>

            {/* Content */}
            <div className="relative text-center px-6 md:px-16 xl:px-40">
              <h1 className="text-4xl md:text-5xl lg:text-6xl uppercase">
              Terms & Condition
              </h1>

              <div className="flex items-center justify-center gap-x-2 mt-4 text-sm md:text-base">
                <Link href="/" className="hover:text-gray-300 transition">
                  Home
                </Link>
                <FaGreaterThan className="text-xs opacity-70" />
                <span className="font-medium"> Terms & Condition </span>
              </div>
            </div>
          </div>
        </div>

        <div className="terms-condition bg-[#F3F1EC]">
  <div className="container mx-auto px-5 md:px-12 xl:px-32 flex flex-col gap-y-10 lg:gap-y-10 justify-between py-10 lg:py-16">
    
    <section>
      <h2 className="text-2xl font-semibold">1. Introduction</h2>
      <p className="mt-2 text-gray-700">
        Welcome to Vajra Jewels Bengaluru, your trusted destination for exquisite handcrafted jewelry. 
        By accessing our website, you agree to comply with these Terms and Conditions. These terms outline the rules, 
        regulations, and legal agreements that govern your use of our services. Please review them carefully before 
        making any purchases.
      </p>
    </section>

    <section>
      <h2 className="text-2xl font-semibold">2. Eligibility</h2>
      <p className="mt-2 text-gray-700">
        To purchase our products or use our services, you must be at least 18 years old. If you are under 18, you must obtain 
        parental or guardian consent. By using our website, you confirm that you meet the eligibility criteria and that all 
        details provided by you are accurate and complete.
      </p>
    </section>

    <section>
      <h2 className="text-2xl font-semibold">3. Product Information</h2>
      <p className="mt-2 text-gray-700">
        We make every effort to ensure that the descriptions, images, and specifications of our jewelry are accurate. 
        However, due to the handcrafted nature of our products, slight variations in size, color, and design may occur. 
        These differences do not indicate defects but rather reflect the uniqueness of each piece.
      </p>
    </section>

    <section>
      <h2 className="text-2xl font-semibold">4. Pricing & Payments</h2>
      <ul className="list-disc pl-5 mt-2 text-gray-700">
        <li>All prices are displayed in Indian Rupees (INR) and may change without prior notice.</li>
        <li>We accept secure payments through authorized third-party payment gateways to ensure safety and reliability.</li>
        <li>Orders will be processed only after successful payment confirmation. In case of a failed transaction, 
        no order will be placed, and the amount (if debited) will be refunded as per the bank’s policy.</li>
      </ul>
    </section>

    <section>
      <h2 className="text-2xl font-semibold">5. Shipping & Delivery</h2>
      <ul className="list-disc pl-5 mt-2 text-gray-700">
        <li>Orders are usually processed within 2-5 business days.</li>
        <li>Shipping timelines may vary depending on the delivery address and logistics partner.</li>
        <li>We ensure timely dispatch but are not liable for delays caused by third-party courier services.</li>
      </ul>
    </section>

    <section>
      <h2 className="text-2xl font-semibold">6. Returns & Refunds</h2>
      <ul className="list-disc pl-5 mt-2 text-gray-700">
        <li>Items can be returned within 7 days of delivery, provided they are in unused and original condition.</li>
        <li>Refunds will be processed only after a quality check of the returned product.</li>
        <li>Customized or personalized jewelry is non-returnable and non-refundable.</li>
      </ul>
    </section>

    <section>
      <h2 className="text-2xl font-semibold">7. Intellectual Property</h2>
      <p className="mt-2 text-gray-700">
        All content on this website, including images, text, product designs, and branding elements, is the exclusive 
        property of Vajra Jewels Bengaluru. Unauthorized use, reproduction, or distribution of any content without our 
        prior written consent is strictly prohibited.
      </p>
    </section>

    <section>
      <h2 className="text-2xl font-semibold">8. Limitation of Liability</h2>
      <p className="mt-2 text-gray-700">
        Vajra Jewels is not liable for any indirect, incidental, or consequential damages resulting from the use of our 
        products or website. This includes but is not limited to losses due to delayed shipping, product variations, or 
        unforeseen service disruptions.
      </p>
    </section>

    <section>
      <h2 className="text-2xl font-semibold">9. Governing Law</h2>
      <p className="mt-2 text-gray-700">
        These Terms and Conditions are governed by the laws of India. Any disputes related to these terms shall be 
        exclusively subject to the jurisdiction of the courts in Bengaluru, Karnataka.
      </p>
    </section>

    <section>
      <h2 className="text-2xl font-semibold">10. Contact Us</h2>
      <p className="mt-2 text-gray-700">
        If you have any queries regarding these Terms and Conditions or require assistance, feel free to contact us:
      </p>
      <p className="mt-2 text-gray-700 font-semibold">Email: info@vajrajewels.com</p>
      <p className="text-gray-700 font-semibold">Phone: +91 94483 87231</p>
      <p className="text-gray-700 font-semibold">
        <span className="font-semibold">Head Office: </span> #144 KGA Road, Domlur Layout, Bengaluru, 560071, India
      </p>
    </section>

  </div>
</div>

      </>
  )
}
