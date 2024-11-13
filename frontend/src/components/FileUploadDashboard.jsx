import React, { useState } from 'react';
import QueryBox from './QueryBox';
import DataPreview from './DataPreview';

const FileUploadDashboard = ({ onQueryResult }) => {
  const [file, setFile] = useState(null);
  const [previewData, setPreviewData] = useState(null);

  const handleFileChange = (event) => {
    const uploadedFile = event.target.files[0];
    setFile(uploadedFile);

    // Parse CSV file for preview
    const reader = new FileReader();
    reader.onload = (e) => {
      const text = e.target.result;
      const [columns, ...rows] = text.split('\n').map((line) => line.split(','));
      setPreviewData({ columns, rows });
    };
    reader.readAsText(uploadedFile);
  };

  return (
    <div className="bg-white shadow rounded p-6 mb-6">
      <h2 className="text-xl font-semibold mb-4">Upload Data</h2>
      <input
        type="file"
        accept=".csv"
        onChange={handleFileChange}
        className="w-full p-2 border rounded mb-4"
      />
      {file && <p className="text-sm text-gray-500">Uploaded: {file.name}</p>}

      {previewData && <DataPreview data={previewData} />}

      {file && <QueryBox onQueryResult={onQueryResult} uploadedFile={file} />}
    </div>
  );
};

export default FileUploadDashboard;
