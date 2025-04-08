import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Recommendations from './pages/Recommendations';
import Profile from './pages/Profile';
import OutfitOfTheDay from './pages/OutfitOfTheDay';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-neutral">
      <Navbar />
      <main className="container mx-auto px-4 py-8">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/recommendations" element={<Recommendations />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/outfit-of-the-day" element={<OutfitOfTheDay />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}