import React from 'react';
import Header from '../components/Header';
import Sidebar from '../components/Sidebar';
import MainContent from '../components/MainContent';
import SearchForm from '../components/SearchForm';

const Index = () => {
  return (
    <div className="flex flex-col h-screen">
      <Header />
      <div className="flex flex-1 overflow-hidden">
        <Sidebar />
        <main className="flex-1 overflow-y-auto p-4">
          <MainContent />
        </main>
        <aside className="w-1/4 bg-gray-100 p-4 overflow-y-auto">
          <SearchForm />
        </aside>
      </div>
    </div>
  );
};

export default Index;