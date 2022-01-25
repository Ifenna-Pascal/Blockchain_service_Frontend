import React from 'react';

function Hero() {
  return (
    <div className="relative h-[46rem] w-full" style={{backgroundImage: "url('/assets/bg.svg')"}}>
    <div className="absolute inset-x-0 bottom-0">
      <svg
        viewBox="0 0 224 12"
        fill="currentColor"
        className="w-full -mb-1 text-white"
        preserveAspectRatio="none"
      >
        <path d="M0,0 C48.8902582,6.27314026 86.2235915,9.40971039 112,9.40971039 C137.776408,9.40971039 175.109742,6.27314026 224,0 L224,12.0441132 L0,12.0441132 L0,0 Z" />
      </svg>
    </div>
    <div className='container h-full'>
        <div className='flex flex-col lg:mr- h-full lg:flex-row justify-between items-center'>
            <div className='text-left basis-1/2 flex flex-col gap-y-3'>
                <h1 className='text-white font-Poppins text-5xl font-bold'> Mine Crypto Currency </h1>
                <h1 className='text-white font-Poppins text-5xl font-bold'>and Earn Coin Easily</h1>
                <span className='text-gray-300 mt-3 font-Poppins text-base' >Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vitae tortor arcu. Vestibulum ac ex lacinia. Nulla molestie nunc varius.</span>
                <div className='flex mt-4 lg:flex-row flex-col gap-x-4'>
                    <button className='text-blue-600 hover:bg-transparent hover:text-white hover:border-2 hover:border-white  bg-white rounded-3xl px-10 py-3 font-semibold tracking-wide text-base font-Poppins'>Token Distibution</button>
                    <button className='text-white bg-transparent  border-white rounded-3xl px-10 py-3 font-semibold tracking-wide border-2 hover:bg-white hover:text-blue-500 hover:border-none  text-base font-Poppins' >White Papper</button>
                </div>
            </div>
            <div className="basis-1/2 mx-8 p-15 flex justify-center lg:justify-end items-center ">
            <img src="http://themecrazy.net/html/cryptoma/img/banner/2.png" />
        </div>
        </div>
    </div>
    </div>
  );
}

export default Hero;
