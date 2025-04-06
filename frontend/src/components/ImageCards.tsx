"use client";

const imageData = [
  {
    src: "/images/tomato.jpg",
    alt: "Tomato",
  },
  {
    src: "/images/banana.jpg",
    alt: "Banana",
  },
  {
    src: "/images/potato.jpg",
    alt: "Potato",
  },
  {
    src: "/images/apple.jpg",
    alt: "Apple",
  },
];

export default function ImageCards() {
  return (
    <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-8">
      {imageData.map((image, index) => (
        <div
          key={index}
          className="rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-all duration-300 bg-white"
        >
          <img
            src={image.src}
            alt={image.alt}
            className="w-full h-40 object-cover"
          />
        </div>
      ))}
    </section>
  );
}
