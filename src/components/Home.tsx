import React from 'react';

function Home() {
  return (
    <div className="bg-white shadow overflow-hidden sm:rounded-lg">
      <div className="px-4 py-5 sm:px-6">
        <h1 className="text-lg leading-6 font-medium text-gray-900">Welcome to Paper Trading App</h1>
        <p className="mt-1 max-w-2xl text-sm text-gray-500">Select a stock from the navigation to view its details.</p>
      </div>
    </div>
  );
}

export default Home;