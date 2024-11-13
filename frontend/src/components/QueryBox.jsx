import React, { useState } from 'react';

const QueryBox = ({ onQueryResult }) => {
  const [query, setQuery] = useState('');

  const handleQuerySubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('http://localhost:10000/api/v1/search', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ query }),
      });
  
      if (!response.ok) {
        throw new Error(`Server error: ${response.statusText}`);
      }
  
      const data = await response.json();
      console.log('Response data:', data); // Debugging log
      onQueryResult(data); // Pass the entire response object
    } catch (error) {
      console.error('Error submitting query:', error);
      onQueryResult({ success: false, error: 'Failed to fetch results' });
    }
  };

  return (
    <form onSubmit={handleQuerySubmit} className="bg-white p-4 shadow rounded mt-6">
      <h2 className="text-xl font-semibold mb-2">Submit a Query</h2>
      <textarea
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Type your query here"
        className="w-full p-2 border rounded mb-4"
      />
      <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
        Submit
      </button>
    </form>
  );
};

export default QueryBox;
