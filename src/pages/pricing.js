import React from 'react';
import '../app/globals.css';

export default function Pricing() {
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
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold mb-8 text-center">Pricing Tiers</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-gray-700 p-8 rounded-lg shadow-md">
              <h3 className="text-2xl font-bold mb-4">Free Tier</h3>
              <ul className="list-disc list-inside">
                <li>100 credits renewed monthly</li>
                <li>Max 10 parallel sessions</li>
                <li>Watermarked video</li>
                <li>Unavailable for commercial use</li>
              </ul>
            </div>
            <div className="bg-gray-700 p-8 rounded-lg shadow-md">
              <h3 className="text-2xl font-bold mb-4">Premium Tier</h3>
              <ul className="list-disc list-inside">
                <li>1000 credits renewed monthly</li>
                <li>Unlimited parallel sessions</li>
                <li>No watermark</li>
                <li>Available for commercial use</li>
              </ul>
            </div>
          </div>
          <div className="mt-12 bg-gray-700 p-8 rounded-lg shadow-md text-center">
            <h3 className="text-2xl font-bold mb-4">Additional Credits</h3>
            <p>Additional credits can be purchased at $10 per 1000 credits by premium users.</p>
          </div>
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
  );
}
