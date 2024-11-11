import React, { useState } from 'react';

const FileUploadDashboard = ({ onDataUpload }) => {
  const [file, setFile] = useState(null);

  const handleFileChange = (event) => {
    const uploadedFile = event.target.files[0];
    if (uploadedFile) {
      const reader = new FileReader();
      reader.onload = (e) => {
        const text = e.target.result;
        const parsedData = text.split('\n').map((row) => row.split(','));
        onDataUpload({ columns: parsedData[0], rows: parsedData.slice(1) });
      };
      reader.readAsText(uploadedFile);
      setFile(uploadedFile);
    }
  };

  const handleGoogleConnect = () => {
    // Simulate Google Sheets connection logic
    alert('Google Sheets connection not implemented.');
  };

  return (
    <div className="bg-white shadow rounded p-6">
      <h2 className="text-xl font-semibold mb-4">Upload Data</h2>
      <div className="flex flex-col md:flex-row gap-4">
        <div className="flex-1">
          <label className="block text-gray-700 mb-2">Upload CSV:</label>
          <input
            type="file"
            accept=".csv"
            onChange={handleFileChange}
            className="w-full p-2 border rounded"
          />
          {file && <p className="text-sm text-gray-500 mt-2">Uploaded: {file.name}</p>}
        </div>
        <div className="flex-1">
          <button
            onClick={handleGoogleConnect}
            className="mt-4 md:mt-0 p-2 w-full bg-green-500 text-white rounded"
          >
            Connect Google Sheets
          </button>
        </div>
      </div>
    </div>
  );
};

export default FileUploadDashboard;
