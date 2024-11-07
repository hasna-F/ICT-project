import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-[#6A38C2] to-[#F83002] py-10 text-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0">
          {/* Logo and text */}
          <div className="text-center md:text-left">
            <h2 className="text-3xl font-bold">Ict<span className="text-[#FFD700]"> Jobseeker</span></h2>
            <p className="text-sm mt-2">Ashish km,
              Sarath,
              Fathima Hasna,
              Nihal

            </p>
          </div>

          
          
        </div>
      </div>
    </footer>
  );
}

export default Footer;
