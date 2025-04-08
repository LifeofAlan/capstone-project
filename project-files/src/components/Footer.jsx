import { FaGithub, FaTwitter, FaInstagram } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className="bg-primary text-white py-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">StyleSage</h3>
            <p className="text-sm">Your personal fashion advisor powered by advanced recommendation algorithms.</p>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><a href="#/about" className="hover:text-accent transition">About Us</a></li>
              <li><a href="#/contact" className="hover:text-accent transition">Contact</a></li>
              <li><a href="#/privacy" className="hover:text-accent transition">Privacy Policy</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Follow Us</h4>
            <div className="flex space-x-4">
              <a href="#" className="text-2xl hover:text-accent transition"><FaTwitter /></a>
              <a href="#" className="text-2xl hover:text-accent transition"><FaInstagram /></a>
              <a href="#" className="text-2xl hover:text-accent transition"><FaGithub /></a>
            </div>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-gray-700 text-center">
          <p>&copy; {new Date().getFullYear()} StyleSage. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}