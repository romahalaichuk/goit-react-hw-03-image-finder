import React from 'react';
import { MutatingDots } from 'react-loader-spinner';

const Loader = () => {
  return (
    <div className="loader">
      <MutatingDots color="#00BFFF" height={150} width={150} />
    </div>
  );
};

export default Loader;
