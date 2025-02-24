import { FaPhoneAlt, FaMapMarkerAlt, FaClock, FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram } from "react-icons/fa";

const ContactSection = () => {
  return (
    <div className="text-white py-12 px-6 text-center" style={{ background : "linear-gradient(to bottom, #300032, #4b0055, #6a007a, #3d003d)" }}>
      <h2 className="text-3xl font-bold mb-8">Reach Out to Us</h2>
      
      <div className="flex flex-row justify-center items-center gap-10 mb-10">
        <div className="flex flex-col items-center">
          <FaPhoneAlt className="text-green-400 text-3xl mb-2" />
          <h3 className="text-lg font-semibold">Contacts</h3>
          <p>info@youraddress.com</p>
          <p>646-675-5974</p>
        </div>

        <div className="flex flex-col items-center">
          <FaMapMarkerAlt className="text-green-400 text-3xl mb-2" />
          <h3 className="text-lg font-semibold">Location</h3>
          <p>3961 Small Street, New York</p>
          <p>United States</p>
        </div>

        <div className="flex flex-col items-center">
          <FaClock className="text-green-400 text-3xl mb-2" />
          <h3 className="text-lg font-semibold">Working hours</h3>
          <p>Open: 12:00 pm</p>
          <p>Closed: 22:00 pm</p>
        </div>
      </div>

      <h3 className="text-2xl font-semibold mb-4">Stay updated with our latest features</h3>
      <div className="flex justify-center items-center gap-4">
        <input 
          type="email" 
          placeholder="Enter your email" 
          className="px-4 py-2 rounded-lg text-white w-64 border-1 border-white" 
        />
        <button className="bg-green-600 px-6 py-2 rounded-lg cursor-pointer">Subscribe</button>
      </div>

      <div className="flex justify-center gap-6 text-2xl mt-8">
        <FaFacebookF className="cursor-pointer hover:text-green-400" />
        <FaTwitter className="cursor-pointer hover:text-green-400" />
        <FaLinkedinIn className="cursor-pointer hover:text-green-400" />
        <FaInstagram className="cursor-pointer hover:text-green-400" />
      </div>

      <p className="mt-6 text-sm">&copy; All Rights Reserved. SOLOS AI Chatbot</p>
    </div>
  );
};

export default ContactSection;