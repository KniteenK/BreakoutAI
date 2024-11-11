import Header from './Header';
import { useState } from 'react';

const Homepage = () => {
  const [data, setData] = useState(null);
  const [fileName, setFileName] = useState('');

  const handleFileUpload = (event) => {
    const file = event.target.files[0];
    setFileName(file.name);

    const reader = new FileReader();
    reader.onload = (e) => {
      const csvData = e.target.result;
      console.log(csvData);
      setData({ columns: ['Column1', 'Column2'], rows: [['Row1Data1', 'Row1Data2']] });
    };
    reader.readAsText(file);
  };

  const handleGoogleSheetLink = () => {
    alert('Google Sheets integration coming soon!');
  };

  return (
    <div className="flex flex-col items-center p-4 min-h-screen bg-gray-100 text-black">
      <Header
        isUser={false}
        handleLogin={() => alert('Login')}
        handleSignup={() => alert('Signup')}
        handleLogout={() => alert('Logout')}
      />
      <main className="w-full max-w-4xl mt-8">
        <h2 className="text-xl font-bold mb-4">Upload Your Data</h2>
        <div className="bg-white shadow rounded p-6">
          <div className="flex flex-col space-y-4">
            <div>
              <label className="block text-gray-700 font-semibold mb-2">Upload CSV File:</label>
              <input
                type="file"
                accept=".csv"
                onChange={handleFileUpload}
                className="border rounded p-2 w-full"
              />
              {fileName && <p className="text-sm text-gray-500 mt-2">Uploaded: {fileName}</p>}
            </div>
            <div>
              <label className="block text-gray-700 font-semibold mb-2">Or Connect Google Sheets:</label>
              <button
                onClick={handleGoogleSheetLink}
                className="bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition-colors"
              >
                Link Google Sheet
              </button>
            </div>
          </div>
        </div>
        {data && (
          <div className="mt-6">
            <h3 className="text-lg font-semibold mb-2">Data Preview</h3>
            <div className="overflow-x-auto">
              <table className="table-auto w-full border-collapse border border-gray-300">
                <thead>
                  <tr>
                    {data.columns.map((col, index) => (
                      <th key={index} className="border p-2 bg-gray-200">{col}</th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {data.rows.map((row, rowIndex) => (
                    <tr key={rowIndex}>
                      {row.map((cell, cellIndex) => (
                        <td key={cellIndex} className="border p-2">{cell}</td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}
      </main>
    </div>
  );
};

export default Homepage;
