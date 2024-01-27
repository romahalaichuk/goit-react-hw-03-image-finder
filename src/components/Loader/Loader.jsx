import React from 'react';
// import { MutatingDots } from 'react-loader-spinner';
import Lottie from 'react-lottie';
import anikiHamsterAnimation from './Aniki Hamster.json';

const Loader = () => {
  const lottieOptions = {
    loop: true,
    autoplay: true,
    animationData: anikiHamsterAnimation,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice',
    },
  };

  return (
    <div className="loader">
      <div style={{ marginTop: 20 }}>
        <Lottie options={lottieOptions} height={350} width={350} />
        {/* <MutatingDots color="#00BFFF" height={150} width={150} /> */}
      </div>
    </div>
  );
};

export default Loader;
