import { Link } from 'react-router-dom';
import { FaFacebookF, FaInstagram, FaXTwitter, FaYoutube } from 'react-icons/fa6';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white pt-12 pb-6 px-6">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
        {/* Logo & Description */}
        <div>
          <h2 className="text-2xl font-bold mb-2">Travel Agency</h2>
          <p className="text-gray-300">
            Your trusted partner for unforgettable travel experiences. Explore the world with us!
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h2 className="text-xl font-semibold mb-3">Quick Links</h2>
          <div className="flex flex-col space-y-2 text-gray-300">
            <Link to="/" className="hover:text-white">Home</Link>
            <Link to="/gallery" className="hover:text-white">Gallery</Link>
            <Link to="/contact" className="hover:text-white">Contact</Link>
            <Link to="/about" className="hover:text-white">About</Link>
          </div>
        </div>

        {/* Subscribe */}
        <div>
          <h3 className="text-xl font-semibold mb-3">Subscribe</h3>
          <form className="flex flex-col sm:flex-row gap-2">
            <input
              type="email"
              placeholder="Enter Your Email"
              className="p-2 rounded-md text-gray-800 w-full"
            />
            <button className="bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded-md">
              Subscribe
            </button>
          </form>

          {/* Social Media Icons */}
          <div className="mt-6">
            <h3 className="text-lg mb-2">Follow Us</h3>
            <div className="flex gap-4 text-xl text-gray-300">
              <FaFacebookF className="hover:text-white cursor-pointer" />
              <FaInstagram className="hover:text-white cursor-pointer" />
              <FaXTwitter className="hover:text-white cursor-pointer" />
              <FaYoutube className="hover:text-white cursor-pointer" />
            </div>
          </div>
        </div>
      </div>

      <div className="border-t border-gray-700 pt-4 text-sm flex flex-col md:flex-row justify-between items-center text-gray-400">
        <p>&copy; 2024 Travel Agency. All rights reserved.</p>
        <div className="flex gap-4 mt-2 md:mt-0">
          <Link to="/privacy-policy" className="hover:text-white">Privacy Policy</Link>
          <Link to="/terms-of-service" className="hover:text-white">Terms of Service</Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
