import React from 'react'
import PrivacyPolicy from '../components/PrivacyPolicy';

export const metadata = {
    title: "Privacy Policy - Vajra Jewels",
    description: "Learn how Vajra Jewels collects, uses, and protects your personal information. Your privacy is our priority.",
  };
  
export default function page() {
  return (
    <div>
      <PrivacyPolicy/>
    </div>
  )
}
