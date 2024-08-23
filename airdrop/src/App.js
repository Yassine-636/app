import React, { useState, useEffect, useCallback } from 'react';
import './HomePage.css'; 

export default function HomePage() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Array of image URLs
  const images = [
    '/image1.jpeg', // Replace with your actual image paths
    '/image2.jpeg',
    '/image3.jpeg'
  ];

  // Function to handle button click
  const handleButtonClick = () => {
    window.open('https://www.google.com', '_blank');
  };

  // Memoize the changeImage function
  const changeImage = useCallback(() => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
  }, [images.length]);

  // Set up an interval to change the image every 3 seconds (3000 milliseconds)
  useEffect(() => {
    const intervalId = setInterval(() => {
      changeImage(); // Call the memoized changeImage function
    }, 3000); // Change image every 3 seconds

    // Clear the interval when the component unmounts
    return () => clearInterval(intervalId);
  }, [changeImage]); // Include changeImage in the dependency array

  return (
    <div className="background-image flex flex-col items-center justify-center min-h-screen text-white text-center space-y-6">
      <div className="overlay"></div>
      <div className="text-block flex flex-col items-center space-y-4">
        <div className="relative">
          <img 
            src={images[currentImageIndex]} 
            alt="Carousel" 
            className="w-24 h-24 mx-auto float-effect rounded-full" 
          />
        </div>
        <h1 className="text-4xl font-bold">
          JOIN OUR <span className="text-yellow-500">"$NAME"</span> AIRDROP.
        </h1>
        <p className="text-xl font-bold">
          Make sure to participate in the <span className="text-yellow-500">"$NAME"</span> airdrop and grow with our community.
        </p>
        <p className="text-xl font-bold">
          LAUNCHING <span className="text-yellow-500">Name</span> OFFERS YOU AN OPPORTUNITY TO GO FROM 0 TO HERO. We work for the community.
        </p>
        <p className="text-xl font-bold">
          I ASKED THEM WHAT TO DO NEXT. THEY RESPONDED: <span className="text-yellow-500">"AN AIRDROP"</span>.
        </p>
        <button 
          className="px-6 py-3 mt-4 text-lg font-bold text-black bg-yellow-500 rounded-full hover:bg-yellow-600"
          onClick={handleButtonClick} 
        >
          JOIN US
        </button>
      </div>
    </div>
  );
}
