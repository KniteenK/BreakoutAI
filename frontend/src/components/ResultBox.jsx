import React from 'react';

const ResultBox = ({ result }) => {
  console.log('ResultBox received result:', result); // Debugging log

  if (!result) {
    return (
      <div className="bg-gray-100 shadow rounded p-4 mt-6">
        <h2 className="text-xl font-semibold mb-2">Query Result</h2>
        <pre className="bg-gray-200 p-2 rounded">No results yet.</pre>
      </div>
    );
  }

  const { success, data, message } = result;

  return (
    <div className="bg-gray-100 shadow rounded p-4 mt-6">
      <h2 className="text-xl font-semibold mb-2">Query Result</h2>
      {success ? (
        <pre className="bg-gray-200 p-2 rounded overflow-x-auto">
          {JSON.stringify(data, null, 2)}
        </pre>
      ) : (
        <p className="text-red-500">Error: {message}</p>
      )}
    </div>
  );
};

export default ResultBox;
