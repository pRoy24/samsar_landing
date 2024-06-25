import React from 'react';

import '../app/globals.css';

export default function Terms() {
  return (
    <div className="font-sans relative">


      <header className="relative bg-gray-900 bg-opacity-50 text-white p-6">
        <div className="container mx-auto flex justify-between items-center">
          <a href="/" className=''>
            <img src='/one.png' className='h-[50px] mt-[-10px]'/>
          </a>
          <nav className="space-x-4">
            <a href="https://github.com/pRoy24/samsar" target='_blank' className="hover:text-gray-400">Github</a>
            <a href="/pricing" className="hover:text-gray-400">Pricing</a>
            <a href="https://app.samsar.one/" className="hover:text-gray-400">Log in</a>
            <a href="https://app.samsar.one/" className="bg-gradient-to-r from-blue-900 to-neutral-900 hover:bg-blue-700 text-white py-2 px-4 rounded">
              Sign-up for free
            </a>
          </nav>
        </div>
      </header>



      <section className="relative bg-gray-800 bg-opacity-50 text-white py-20">
      <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-6">Terms of Use</h1>
      <p className="mb-4">
        Welcome to SamsarOne, a web-based video editing software. By using our service, you agree to comply with and be bound by the following terms and conditions. Please review them carefully.
      </p>

      <h2 className="text-2xl font-semibold mt-6 mb-2">Prohibited Actions</h2>
      <p className="mb-4">
        Users of our service must not engage in the following activities:
      </p>
      <ul className="list-disc list-inside mb-4">
        <li>Generating or uploading content that contains nudity.</li>
        <li>Generating or uploading content that is illegal or promotes illegal activities.</li>
        <li>Generating or uploading content that incites self-harm or harm to others.</li>
        <li>Generating or uploading content that targets minors in any inappropriate manner.</li>
        <li>Creating multiple accounts to bypass rate limits or other restrictions.</li>
      </ul>

      <h2 className="text-2xl font-semibold mt-6 mb-2">Account Usage</h2>
      <p className="mb-4">
        Each user is allowed to create one account. Creating multiple accounts to bypass rate limits or other restrictions is strictly prohibited. Violations of this rule may result in the suspension or termination of all related accounts.
      </p>

      <h2 className="text-2xl font-semibold mt-6 mb-2">Content Responsibility</h2>
      <p className="mb-4">
        You are solely responsible for the content you generate or upload using our service. We do not endorse any content and are not liable for any damages or losses resulting from your use of our service.
      </p>

      <h2 className="text-2xl font-semibold mt-6 mb-2">Termination of Service</h2>
      <p className="mb-4">
        We reserve the right to suspend or terminate your access to our service at any time, without notice, for conduct that we believe violates these terms or is harmful to other users of the service, us, or third parties, or for any other reason.
      </p>

      <h2 className="text-2xl font-semibold mt-6 mb-2">Changes to Terms</h2>
      <p className="mb-4">
        We reserve the right to modify these terms of use at any time. Any changes will be effective immediately upon posting on this page. Your continued use of the service following the posting of changes constitutes your acceptance of such changes.
      </p>

      <h2 className="text-2xl font-semibold mt-6 mb-2">Contact Us</h2>
      <p className="mb-4">
        If you have any questions about these terms, please contact us at webmaster@samsar.one
      </p>
    </div>

      </section>




      <footer className="relative bg-gray-900 bg-opacity-50 text-white py-6">
        <div className="container mx-auto text-center">
          <p>&copy; 2024 Samsar One.</p>
          <nav className="space-x-4">
            <a href="/terms" className="hover:text-gray-400">Terms of Use</a>
            <a href="/privacy" className="hover:text-gray-400">Privacy Policy</a>
            <a href="/company" className="hover:text-gray-400">Company</a>
          </nav>
        </div>
      </footer>
    </div>
  )
}