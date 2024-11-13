import React from 'react';

const ResultBox = ({ result }) => {
  if (!result) {
    return (
      <div className="bg-gray-100 shadow rounded p-4 mt-6">
        <h2 className="text-xl font-semibold mb-2">Query Result</h2>
        <pre className="bg-gray-200 p-2 rounded">No results yet.</pre>
      </div>
    );
  }

  const { success, data, message } = result;

  // Function to format the result data (e.g., list of individuals under a certain age)
  const formatResults = (data) => {
    if (data && typeof data === 'string') {
      return data.split('\n').map((line, index) => (
        <p key={index} className="text-gray-700">{line}</p>
      ));
    }

    return <p className="text-gray-700">{data}</p>;
  };

  return (
    <div className="bg-gray-100 shadow rounded p-4 mt-6">
      <h2 className="text-xl font-semibold mb-2">Query Result</h2>
      {success ? (
        <div className="text-gray-700">
          {formatResults(data)}
        </div>
      ) : (
        <p className="text-red-500">Error: {message}</p>
      )}
    </div>
  );
};

export default ResultBox;
