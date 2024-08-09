import React from 'react';
import Head from 'next/head';
import { FaTwitter, FaDiscord } from 'react-icons/fa';
import '../app/globals.css';

export default function Home() {
  return (
    <div className="font-sans relative">
      <Head>
        <title>Samsar Motion Pictures</title>
        <meta name="description" content="Unleash your creativity with AI-assisted video editor. Use Gen-AI natively to bring ideas to life." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.png" />
        <meta property="og:title" content="Samsar Motion Pictures" />
        <meta property="og:description" content="Unleash your creativity with AI-assisted video editor. Use Gen-AI natively to bring ideas to life." />
        <meta property="og:image" content="/social-preview.png" />
        <meta property="og:url" content="https://samsar.one" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Samsar Motion Pictures" />
        <meta name="twitter:description" content="Unleash your creativity with AI-assisted video editor. Use Gen-AI natively to bring ideas to life." />
        <meta name="twitter:image" content="/social-preview.png" />
      </Head>

      {/* Background video */}
      <video
        className="absolute top-0 left-0 w-full h-full object-cover -z-10"
        src="https://dgyheyjs5bch6.cloudfront.net/hyp_1.mp4"
        autoPlay
        loop
        muted
      />

      <header className="relative bg-gray-900 bg-opacity-50 text-white p-6">
        <div className="container mx-auto flex justify-between items-center">
          <a href="/" className=''>
            <img src='/one.png' className='h-[50px] mt-[-10px]' alt="Samsar One Logo" />
          </a>
          <nav className="space-x-4">
            <a href="https://blog.samsar.one/" target='_blank' className="hover:text-gray-400">Blog</a>
            <a href="https://github.com/pRoy24/samsar" target='_blank' className="hover:text-gray-400">Github</a>
            <a href="/pricing" className="hover:text-gray-400">Pricing</a>
          </nav>
        </div>
      </header>

      <section className="relative bg-gray-800 bg-opacity-50 text-white py-10">
        <div className="container mx-auto text-center">
          <h1 className="text-5xl font-bold mb-8 md:mt-8">Samsar Motion Pictures</h1>
          <p className="text-xl mt-8 mb-8">Unleash your creativity with AI-assisted video editor.</p>
          <div className='mt-16 mb-16 md:mb-32'>
            <a href="https://app.samsar.one/" className="bg-gradient-to-r from-blue-900 to-neutral-900 hover:bg-neutral-600 text-white py-8 px-16 text-xl rounded">Go to Samsar Studio</a>
          </div>
          <p className="text-md mt-8 mb-8">Just want to quickly create videos from text prompts?</p>
          <div className='mt-4 mb-16 md:mb-32'>
            <a href="https://app.samsar.one/quick_video" className="bg-gradient-to-r from-cyan-900 to-neutral-900 hover:bg-neutral-900 text-white py-4 px-16 text-xl rounded">Go to Quick Editor</a>
          </div>

          
        </div>
      </section>




      <section className="relative w-full">
        <div className="container-fluid mx-auto text-center">
          <div className='w-full bg-neutral-200 pt-8 pb-8 opacity-80'>
            <h2 className="text-4xl font-bold mb-6 text-neutral-800">Use Gen-AI natively to bring ideas to life.</h2>
            <p className="text-xl mb-6 text-neutral-900">Choose from the best models that fit your task.</p>
          </div>
          <div className='pt-16 pb-16'>
            <div className='container mx-auto'>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="bg-gray-600 p-6 rounded shadow">
                  <video className="w-full mt-4" controls>
                    <source src="https://dgyheyjs5bch6.cloudfront.net/neon_lts.mp4" type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>
                </div>
                <div className="bg-gray-600 p-6 rounded shadow">
                  <video className="w-full mt-4" controls>
                    <source src="https://dgyheyjs5bch6.cloudfront.net/lock_in.mp4" type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>
                </div>
                <div className="bg-gray-600 p-6 rounded shadow">
                  <video className="w-full mt-4" controls>
                    <source src="https://dgyheyjs5bch6.cloudfront.net/video-6676895b8f1a22aa57eefd43+(10).mp4" type="video/mp4" />
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
            Building the best AI-assist tools which allow you to
            create and share your ideas with the world.
          </p>
          <div>Follow us on social media.</div>
          <div className="flex justify-center mt-4 space-x-6">
            <a href="https://x.com/samsar_one" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:text-blue-700">
              <FaTwitter size={32} />
            </a>
            <a href="https://discord.gg/bEAv2Fb2" target="_blank" rel="noopener noreferrer" className="text-purple-500 hover:text-purple-700">
              <FaDiscord size={32} />
            </a>
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
