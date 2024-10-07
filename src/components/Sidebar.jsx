import React from 'react';
import { Home, FileText, Settings, HelpCircle, Database, UserPlus, Search } from 'lucide-react';

const Sidebar = () => {
  return (
    <nav className="bg-gray-800 text-white w-16 flex flex-col items-center py-4">
      <SidebarIcon icon={<Home />} tooltip="หน้าหลัก" />
      <SidebarIcon icon={<Database />} tooltip="จัดการทะเบียน" />
      <SidebarIcon icon={<UserPlus />} tooltip="เพิ่มทะเบียนใหม่" />
      <SidebarIcon icon={<Search />} tooltip="ค้นหาทะเบียน" />
      <SidebarIcon icon={<FileText />} tooltip="รายงาน" />
      <SidebarIcon icon={<Settings />} tooltip="ตั้งค่า" />
      <SidebarIcon icon={<HelpCircle />} tooltip="ช่วยเหลือ" />
    </nav>
  );
};

const SidebarIcon = ({ icon, tooltip }) => (
  <div className="sidebar-icon group">
    {icon}
    <span className="sidebar-tooltip group-hover:scale-100">
      {tooltip}
    </span>
  </div>
);

export default Sidebar;