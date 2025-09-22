

import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";


import Nav from "./components/Nav";
import Footer from "./components/Footer";
import FooterTopMarque from "./components/FooterTopMarque";
import Providers from "./components/Providers";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Vajra Jewels - Timeless Elegance",
  description: "Discover exquisite jewelry collections at Vajra Jewels, where craftsmanship meets luxury.",
};


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Providers>
        <Nav/>
        {children}
        <FooterTopMarque/>
        <Footer/>
        </Providers>
      </body>
    </html>
  );
}
