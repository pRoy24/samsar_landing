import React from 'react';

import '../app/globals.css';

export default function Home() {
  return (
    <div className="font-sans relative">
      {/* Background video */}
      <video
        className="absolute top-0 left-0 w-full h-full object-cover -z-10"
        src="https://samsar-resources.s3.us-west-2.amazonaws.com/hyp_1.mp4"
        autoPlay
        loop
        muted
      />

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
        <div className="container mx-auto text-center">
          <h1 className="text-5xl font-bold mb-8 md:mt-8">Samsar Motion Pictures</h1>
          <p className="text-xl mb-8 mb-8">Unleash your creativity with AI-assisted video editor.</p>
          <div className='mt-16 mb-16 md:mb-32'>
            <a href="https://app.samsar.one/" className="bg-gradient-to-r from-blue-900 to-neutral-900 hover:bg-neutral-900 text-white py-4 px-8 text-xl rounded">Go to App</a>
          </div>
        </div>
      </section>

      <section className="relative w-full ">

        <div className="container-fluid mx-auto text-center">
          <div className='w-full  bg-neutral-200 pt-8 pb-8 opacity-80'>
            <h2 className="text-4xl font-bold mb-6 text-neutral-800">Use Gen-AI natively to bring ideas to life.</h2>
            <p className="text-xl mb-6 text-neutral-900">Choose from the best models that fit your task.</p>
          </div>
          <div className='pt-16 pb-16 '>
            <div className='container mx-auto'>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 ">
                <div className="bg-gray-600 p-6 rounded shadow">
                  <video className="w-full mt-4" controls>
                    <source src="https://samsar-resources.s3.us-west-2.amazonaws.com/video-667636c24e15b655603c3519+(6).mp4" type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>
                </div>

                <div className="bg-gray-600  p-6 rounded shadow">
                  <video className="w-full mt-4" controls>
                    <source src="https://samsar-resources.s3.us-west-2.amazonaws.com/lock_in.mp4" type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>
                </div>

                <div className="bg-gray-600 p-6 rounded shadow">
                  <video className="w-full mt-4" controls>
                    <source src="https://samsar-resources.s3.us-west-2.amazonaws.com/video-6676895b8f1a22aa57eefd43+(10).mp4" type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="relative bg-gray-200 bg-opacity-75 py-20">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6 text-stone-800">Samsar One</h2>
          <p className="text-xl mb-6">
            Building the best ai-assist tools which allow you to
            create and share your ideas with the world.
          </p>
          <a href="#" className="bg-blue-900 hover:bg-blue-600 text-white py-2 px-4 rounded">Follow us on social media.</a>
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
