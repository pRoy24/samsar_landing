import React from 'react';

import '../app/globals.css';

export default function Terms() {
  return (
    <div className="font-sans relative">


      <header className="relative bg-gray-900 bg-opacity-50 text-white p-6">
        <div className="container mx-auto flex justify-between items-center">
          <a href="/" className=''>
            <img src='/one.png' className='h-[50px] mt-[-10px]' />
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
          <h1 className="text-4xl font-bold mb-6">Privacy Policy</h1>
          <p className="mb-4">
            Welcome to SamsarOne. We value your privacy and are committed to protecting your personal information. This Privacy Policy outlines how we handle your data.
          </p>

          <h2 className="text-2xl font-semibold mt-6 mb-2">Data Usage</h2>
          <p className="mb-4">
            We do not use your data to train models. All processing is done using third-party models accessed via API. We do not train our own models with your data.
          </p>

          <h2 className="text-2xl font-semibold mt-6 mb-2">Third-Party Models</h2>
          <p className="mb-4">
            Our service exclusively uses third-party models via API to provide video editing features. We rely on these third-party models and do not develop or train our own models.
          </p>

          <h2 className="text-2xl font-semibold mt-6 mb-2">Account Deletion</h2>
          <p className="mb-4">
            All customer information is permanently deleted upon account deletion. We ensure that no personal data is retained once you delete your account.
          </p>

          <h2 className="text-2xl font-semibold mt-6 mb-2">Public Visibility</h2>
          <p className="mb-4">
            The images and artifacts you generate using our service are publicly visible via URL. Please be aware that anyone with the URL can access these generated contents.
          </p>

          <h2 className="text-2xl font-semibold mt-6 mb-2">Changes to This Policy</h2>
          <p className="mb-4">
            We may update this Privacy Policy from time to time. Any changes will be posted on this page, and your continued use of the service after such changes have been made will constitute your acceptance of the changes.
          </p>

          <h2 className="text-2xl font-semibold mt-6 mb-2">Contact Us</h2>
          <p className="mb-4">
            If you have any questions or concerns about this Privacy Policy, please contact us at webmaster@samsar.one
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