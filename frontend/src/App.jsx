import React, { useState } from 'react';
import FileUploadDashboard from './components/FileUploadDashboard.jsx';
import AnswerBox from './components/ResultBox.jsx';

const App = () => {
  const [queryResult, setQueryResult] = useState(null);

  return (
    <div className="max-w-5xl mx-auto p-6">
      <h1 className="text-3xl font-bold text-center mb-8">Q-gpt</h1>
      <p className="text-center text-gray-600 mb-4">
        Upload your CSV or connect Google Sheets to get started.
      </p>
      
      <FileUploadDashboard onQueryResult={setQueryResult} />

      <AnswerBox result={queryResult} />
    </div>
  );
};

export default App;
