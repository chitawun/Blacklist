import React from 'react';
import { Clock } from 'lucide-react';

const Header = () => {
  const [currentTime, setCurrentTime] = React.useState(new Date());

  React.useEffect(() => {
    const timer = setInterval(() => setCurrentTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <header className="bg-blue-600 text-white p-4 flex justify-between items-center">
      <div className="flex items-center">
        <img src="/logo.svg" alt="Logo" className="h-8 w-8 mr-2" />
        <h1 className="text-xl font-bold">ระบบทะเบียนพิเศษ</h1>
      </div>
      <div className="flex items-center space-x-4">
        <span className="bg-green-500 px-2 py-1 rounded-full text-xs">Online</span>
        <div className="flex items-center">
          <Clock className="mr-2" />
          <span>{currentTime.toLocaleString('th-TH', { year: 'numeric', month: '2-digit', day: '2-digit', hour: '2-digit', minute: '2-digit', second: '2-digit', hour12: false })}</span>
        </div>
        <span>นางสาวธรพร ศรีสัมฤทธิ์</span>
        <select className="bg-blue-700 rounded px-2 py-1">
          <option>TH</option>
          <option>EN</option>
        </select>
      </div>
    </header>
  );
};

export default Header;