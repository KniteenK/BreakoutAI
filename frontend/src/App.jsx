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

  return (
    <div className="min-h-screen bg-gray-100">
      <Header />
      <div className="container mx-auto p-6">
        <FileUploadDashboard onDataUpload={handleDataUpload} />
        {data && <DataPreview data={data} />}
        <QueryBox onQueryResult={setQueryResult} />
        <ResultBox result={queryResult} />
      </div>
    </div>
  );
};

export default App;
