import React from 'react';

const ResultBox = ({ result }) => {
  return (
    <div className="bg-gray-100 shadow rounded p-4 mt-6">
      <h2 className="text-xl font-semibold mb-2">Query Result</h2>
      <pre className="bg-gray-200 p-2 rounded">{result ? JSON.stringify(result, null, 2) : 'No results yet.'}</pre>
    </div>
  );
};

export default ResultBox;
