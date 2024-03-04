import Head from 'next/head';
import Link from 'next/link';
import React from 'react';

const Home = () => {
  return (
    <>
      <Head>
        <title>Home | auctionweb.site</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <section className="xl:bg-contain bg-top bg-no-repeat">
        <div className="flex flex-wrap items-center -mx-3">
          <div className="w-full lg:w-1/2 px-3">
            <div className="py-12">
              <div className="max-w-lg lg:max-w-md mx-auto lg:mx-0 mb-8 text-center lg:text-left">
                <h2 className="text-3xl md:text-4xl mb-4 font-bold font-heading">
                  <span>A </span>
                  <span> Scalable Auction System</span>
                </h2>
              </div>
              <div className="text-center lg:text-left">
                <Link href="/listings">
                  <a className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                    Browse Listings
                  </a>
                </Link>
              </div>
            </div>
          </div>
          <div className="w-full lg:w-1/2 px-3 lg:bg-blueGray-50 mb-12 lg:mb-0">
            <div className="flex items-center justify-center">
              <img
                className="lg:max-w-lg"
                src="https://shuffle.dev/metis-assets/illustrations/working-from-airport.png" //this is the image of the main dude in the airport with the laptop sitting on his luggage
                alt=""
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
