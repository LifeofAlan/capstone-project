import { Link } from 'react-router-dom';
import { FaTshirt, FaUser, FaHome, FaCalendarDay } from 'react-icons/fa';

export default function Navbar() {
  return (
    <nav className="bg-primary text-white shadow-lg">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="flex items-center space-x-2">
            <FaTshirt className="text-2xl" />
            <span className="font-bold text-xl">StyleSage</span>
          </Link>
          
          <div className="flex space-x-8">
            <Link to="/" className="flex items-center space-x-1 hover:text-accent transition">
              <FaHome />
              <span>Home</span>
            </Link>
            <Link to="/outfit-of-the-day" className="flex items-center space-x-1 hover:text-accent transition">
              <FaCalendarDay />
              <span>Daily Outfit</span>
            </Link>
            <Link to="/recommendations" className="flex items-center space-x-1 hover:text-accent transition">
              <FaTshirt />
              <span>Recommendations</span>
            </Link>
            <Link to="/profile" className="flex items-center space-x-1 hover:text-accent transition">
              <FaUser />
              <span>Profile</span>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}