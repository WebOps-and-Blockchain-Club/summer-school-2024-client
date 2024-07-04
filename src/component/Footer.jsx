import React from "react";

const Footer = () => {
  return (
    <div className="border-t-2">
      <footer className="flex items-center justify-between w-full text-center text-gray-600 dark:text-gray-400 dark:bg-gray-800 p-4">
        <img
          src="https://cfi.iitm.ac.in/assets/WebopsandBlockchainLogo-207245f0.png"
          alt="Club_logo"
          className="w-16 h-16 mr-4"
        />
        <p>© 2024 InstiOlx. All Rights Reserved.</p>
      </footer>
    </div>
  );
};

export default Footer;
