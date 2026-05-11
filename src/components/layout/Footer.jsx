import { FaHeart } from 'react-icons/fa';
import { navItems, profile } from '../../data/portfolioData';

export default function Footer() {
  return (
    <footer className="border-t border-white/10 py-10 light:border-slate-900/10">
      <div className="section-shell flex flex-col gap-6 text-center sm:flex-row sm:items-center sm:justify-between sm:text-left">
        <div>
          <p className="text-xl font-black">{profile.name}</p>
          <p className="mt-2 inline-flex items-center justify-center gap-2 text-sm text-slate-400 sm:justify-start light:text-slate-500">
            Built with <FaHeart className="text-cyanGlow" /> by Abhishek
          </p>
        </div>
        <div className="flex flex-wrap justify-center gap-3">
          {navItems.slice(0, 6).map((item) => (
            <a key={item} href={`#${item.toLowerCase()}`} className="text-sm font-semibold text-slate-400 hover:text-cyanGlow light:text-slate-500">
              {item}
            </a>
          ))}
        </div>
        <p className="text-sm text-slate-500">&copy; {new Date().getFullYear()} All rights reserved.</p>
      </div>
    </footer>
  );
}
