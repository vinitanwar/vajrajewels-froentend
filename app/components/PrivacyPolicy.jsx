import Link from "next/link";
import React from 'react'
import { FaGreaterThan } from 'react-icons/fa6'

export default function PrivacyPolicy() {
  return (
    <>
        <div className="relative text-white">
        <div className="bg-cover bg-center bg-no-repeat relative bg-[url('/img/heroSection/2swiper.webp')] h-[25vh] md:h-[35vh]   xl:h-[40vh] flex flex-col justify-center items-center">

            {/* Overlay */}
            <div className="absolute inset-0 bg-black/30"></div>

            {/* Content */}
            <div className="relative text-center px-6 md:px-16 xl:px-40">
              <h1 className="text-4xl md:text-5xl lg:text-6xl uppercase">
                Privacy & Policy 
              </h1>

              <div className="flex items-center justify-center gap-x-2 mt-4 text-sm md:text-base">
                <Link href="/" className="hover:text-gray-300 transition">
                  Home
                </Link>
                <FaGreaterThan className="text-xs opacity-70" />
                <span className="font-medium"> Privacy & Policy </span>
              </div>
            </div>
          </div>
        </div>

         <div className="Privacy-Policy bg-[#F3F1EC]">
      <div className="container mx-auto px-5 md:px-12 xl:px-32 flex flex-col gap-y-10 lg:gap-y-10 justify-between py-10 lg:py-16">
        
        <section>
          <h2 className="text-2xl font-semibold">1. Introduction</h2>
          <p className="mt-2 text-gray-700">
            At Vajra Jewels, we respect your privacy and are committed to safeguarding your personal information. 
            This Privacy Policy explains how we collect, use, and protect your data when you visit our website or make a purchase.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold">2. Information We Collect</h2>
          <ul className="list-disc pl-5 mt-2 text-gray-700">
            <li>Personal details (name, email, phone number, address)</li>
            <li>Billing & shipping information for order processing</li>
            <li>Securely processed payment details (handled by third-party providers)</li>
            <li>Browsing behavior, IP address, and device data</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold">3. How We Use Your Information</h2>
          <ul className="list-disc pl-5 mt-2 text-gray-700">
            <li>Process and fulfill orders, returns, and refunds</li>
            <li>Provide customer support and improve services</li>
            <li>Enhance website functionality and shopping experience</li>
            <li>Send order updates, promotions, and marketing communications</li>
            <li>Ensure security and prevent fraud</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold">4. Sharing of Information</h2>
          <p className="mt-2 text-gray-700">Your personal data is never sold or misused. We may share details with:</p>
          <ul className="list-disc pl-5 mt-2 text-gray-700">
            <li>Trusted payment providers for transaction processing</li>
            <li>Shipping partners for delivery purposes</li>
            <li>Legal authorities if required by law</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold">5. Data Security</h2>
          <p className="mt-2 text-gray-700">
            We implement security protocols to protect your data from unauthorized access. However, we recommend using strong passwords 
            and keeping account details confidential.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold">6. Cookies & Tracking</h2>
          <p className="mt-2 text-gray-700">
            Our website uses cookies to enhance user experience and analyze site traffic. You can manage your cookie preferences in your browser settings.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold">7. Your Rights</h2>
          <ul className="list-disc pl-5 mt-2 text-gray-700">
            <li>Access, update, or delete your personal data</li>
            <li>Opt-out of marketing communications</li>
            <li>Request data portability</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold">8. Third-Party Links</h2>
          <p className="mt-2 text-gray-700">
            Our website may contain links to external sites. Vajra Jewels is not responsible for their privacy policies.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold">9. Updates to This Policy</h2>
          <p className="mt-2 text-gray-700">
            We may update this Privacy Policy periodically. Any changes will be posted on this page.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold">10. Contact Us</h2>
          <p className="mt-2 text-gray-700">For any privacy-related inquiries, contact us at:</p>
          <p className="mt-2 text-gray-700 font-semibold">Email: info@vajrajewels.com</p>
          <p className="text-gray-700 font-semibold">Phone: +91 94483 87231</p>
          <p className="text-gray-700 font-semibold">Address: #144 KGA Road, Domlur Layout, Bengaluru, 560071, India</p>
        </section>
      </div>
    </div>

      </>
  )
}
