import React from 'react';

import '../app/globals.css';

export default function Company() {
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


        <div className="container mx-auto px-4 py-8 min-h-64">

          <h1 className="text-4xl font-bold mb-6">About</h1>

 
            <div>
              https://samsar.one is a suite of software tools developed by Kashmere Labs PTE Ltd.
              <div>
                A software development and research lab based in Singapore.
              </div>
            </div>
            <div className='mt-8'>
              For contracts and inquiries, please email send at roy@kashmerelabs.com
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
  )
}