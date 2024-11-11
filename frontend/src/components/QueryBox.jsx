import React, { useState } from 'react';

const QueryBox = ({ onQuerySubmit }) => {
  const [query, setQuery] = useState('');

  const handleKeyPress = (event) => {
    if (event.key === 'Enter' && query.trim()) {
      onQuerySubmit(query);
      setQuery(''); // Clear input after submission
    }
  };

  return (
    <div className="bg-white shadow rounded p-4 mt-6">
      <label className="block text-gray-700 mb-2">Enter your query:</label>
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        onKeyPress={handleKeyPress}
        placeholder="Type your query and press Enter"
        className="w-full p-2 border rounded"
      />
    </div>
  );
};

export default QueryBox;
