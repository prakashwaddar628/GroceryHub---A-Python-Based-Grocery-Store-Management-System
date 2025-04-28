'use client';

import Image from 'next/image';

interface BannerProps {
  items: { name: string; describe: string; image: string; buttonText: string }[];
}

export default function Banner({items}: BannerProps) {
  return (
    <div className="w-full bg-blue-100 py-6 px-8 m-auto">
      <div className="container mx-auto flex space-x-4 overflow-x-hidden">
        {items.map((item) => (
          <div
            key={item.name}
            className="bg-white rounded-md shadow-md flex-shrink-0 w-80 md:w-full p-2 relative"
          >
            <div className="relative w-full h-46 rounded-md overflow-hidden">
              <Image
                src={item.image}
                alt={item.name}
                layout="fill"
                objectFit="cover"
                className="object-cover"
              />
              <div className="absolute top-0 left-0 w-full h-full flex flex-col justify-end items-center p-4 bg-opacity-60 text-white">
                <div className="text-4xl text-shadow text-shadow-yellow-300 font-bold mb-2">{item.name}</div>
                <div className="text-amber-600 font-bold font-serif text-shadow-amber-500 mb-4 text-6xl md:text-4xl">{item.describe}</div>
                <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded text-sm md:text-base">
                  {item.buttonText}
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
