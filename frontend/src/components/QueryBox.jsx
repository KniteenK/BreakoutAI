import React, { useState } from 'react';

const QueryBox = ({ onQueryResult, uploadedFile }) => {
  const [query, setQuery] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleQuerySubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      const formData = new FormData();
      formData.append('query', query);
      formData.append('file', uploadedFile);

      const response = await fetch('http://localhost:10000/api/v1/search', {
        method: 'POST',
        body: formData,
      });

      if (!response.ok) {
        throw new Error(`Server error: ${response.statusText}`);
      }

      const data = await response.json();
      onQueryResult(data);
    } catch (error) {
      console.error('Error submitting query:', error);
      onQueryResult({ success: false, error: 'Failed to fetch results' });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <form onSubmit={handleQuerySubmit} className="bg-white p-4 shadow rounded mb-6">
      <h2 className="text-xl font-semibold mb-2">Submit a Query</h2>
      <textarea
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Type your query here"
        className="w-full p-2 border rounded mb-4"
      />
      <button
        type="submit"
        className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 w-full disabled:bg-gray-400"
        disabled={isLoading}
      >
        {isLoading ? 'Loading...' : 'Submit'}
      </button>
    </form>
  );
};

export default QueryBox;
