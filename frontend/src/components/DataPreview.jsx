const DataPreview = ({ data }) => (
  <div className="bg-white shadow rounded p-6 mt-6">
    <h2 className="text-xl font-semibold mb-4">Data Preview</h2>
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
          {data.rows.slice(0, 5).map((row, rowIndex) => (
            <tr key={rowIndex}>
              {row.map((cell, cellIndex) => (
                <td key={cellIndex} className="border p-2">{cell}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
    <p className="text-sm text-gray-500 mt-2">Showing first 5 rows.</p>
  </div>
);

export default DataPreview;
