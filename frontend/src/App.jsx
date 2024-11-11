import React, { useState } from 'react';
import Header from './components/Header';
import FileUploadDashboard from './components/FileUploadDashboard';
import DataPreview from './components/DataPreview';
import QueryBox from './components/QueryBox';
import ResultBox from './components/ResultBox';

const App = () => {
  const [data, setData] = useState(null);
  const [queryResult, setQueryResult] = useState(null);

  const handleDataUpload = (uploadedData) => {
    setData(uploadedData);
  };

  const handleQuerySubmit = async (query) => {
    try {
      // Replace with actual API endpoint when available
      const response = await fetch('https://api.example.com/query', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ query, data }),
      });
      const result = await response.json();
      setQueryResult(result);
    } catch (error) {
      console.error('Error fetching query result:', error);
      setQueryResult({ error: 'Failed to fetch data' });
    }
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <Header />
      <div className="container mx-auto p-6">
        <FileUploadDashboard onDataUpload={handleDataUpload} />
        {data && <DataPreview data={data} />}
        <QueryBox onQuerySubmit={handleQuerySubmit} />
        <ResultBox result={queryResult} />
      </div>
    </div>
  );
};

export default App;
