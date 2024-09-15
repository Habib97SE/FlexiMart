// components/Footer.tsx
import { FaFacebook, FaGooglePlus, FaTwitter, FaInstagram, FaRss, FaMapMarkerAlt, FaPhone, FaEnvelope, FaFax } from 'react-icons/fa';

const Footer = () => {
  return (
    <section className="section-b-space light-layout bg-gray-100 py-8">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          
          {/* About Section */}
          <div>
            <h4 className="font-bold mb-4">About</h4>
            <div className="mb-4">
              <a href="/">
                <img src="https://via.placeholder.com/100x100?text=Logo" alt="Logo" className="w-32" />
              </a>
            </div>
            <p className="text-gray-600 mb-4">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.
            </p>
            <div className="footer-social">
              <ul className="flex space-x-4">
                <li>
                  <a href="https://www.facebook.com" target="_blank" rel="noreferrer">
                    <FaFacebook className="text-gray-600 hover:text-blue-600" />
                  </a>
                </li>
                <li>
                  <a href="https://plus.google.com" target="_blank" rel="noreferrer">
                    <FaGooglePlus className="text-gray-600 hover:text-red-600" />
                  </a>
                </li>
                <li>
                  <a href="https://twitter.com" target="_blank" rel="noreferrer">
                    <FaTwitter className="text-gray-600 hover:text-blue-400" />
                  </a>
                </li>
                <li>
                  <a href="https://www.instagram.com" target="_blank" rel="noreferrer">
                    <FaInstagram className="text-gray-600 hover:text-pink-500" />
                  </a>
                </li>
                <li>
                  <a href="https://rss.com" target="_blank" rel="noreferrer">
                    <FaRss className="text-gray-600 hover:text-orange-400" />
                  </a>
                </li>
              </ul>
            </div>
          </div>

          {/* My Account Section */}
          <div>
            <h4 className="font-bold mb-4">My Account</h4>
            <ul className="space-y-2 text-gray-600">
              <li><a href="/shop/left_sidebar" className="hover:text-gray-900">Womens</a></li>
              <li><a href="/shop/left_sidebar" className="hover:text-gray-900">Clothing</a></li>
              <li><a href="/shop/left_sidebar" className="hover:text-gray-900">Accessories</a></li>
              <li><a href="/shop/left_sidebar" className="hover:text-gray-900">Featured</a></li>
            </ul>
          </div>

          {/* Why We Choose Section */}
          <div>
            <h4 className="font-bold mb-4">Why We Choose</h4>
            <ul className="space-y-2 text-gray-600">
              <li><a href="#" className="hover:text-gray-900">Shipping & Return</a></li>
              <li><a href="#" className="hover:text-gray-900">Secure Shopping</a></li>
              <li><a href="#" className="hover:text-gray-900">Gallery</a></li>
              <li><a href="#" className="hover:text-gray-900">Affiliates</a></li>
              <li><a href="#" className="hover:text-gray-900">Contacts</a></li>
            </ul>
          </div>

          {/* Store Information Section */}
          <div>
            <h4 className="font-bold mb-4">Store Information</h4>
            <ul className="space-y-4 text-gray-600">
              <li className="flex items-start">
                <FaMapMarkerAlt className="mr-2 mt-1 text-gray-600" />
                Multikart Demo Store, Demo Store India 345-659
              </li>
              <li className="flex items-start">
                <FaPhone className="mr-2 mt-1 text-gray-600" />
                Call Us: 123-456-7898
              </li>
              <li className="flex items-start">
                <FaEnvelope className="mr-2 mt-1 text-gray-600" />
                Email Us: <a href="mailto:support@fiot.com" className="hover:text-gray-900">support@fiot.com</a>
              </li>
              <li className="flex items-start">
                <FaFax className="mr-2 mt-1 text-gray-600" />
                Fax: 123456
              </li>
            </ul>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Footer;
