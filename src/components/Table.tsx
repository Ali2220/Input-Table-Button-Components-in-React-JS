import React from 'react';

interface TableProps {
  data: Array<{ [key: string]: string | number }>;
}

const Table: React.FC<TableProps> = ({ data }) => {
  if (data.length === 0) return <div>No data available</div>;

  const headers = Object.keys(data[0]);

  return (
    <table>
      <thead>
        <tr>
          {headers.map((header) => (
            <th key={header}>{header}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {data.map((row, index) => (
          <tr key={index}>
            {headers.map((header) => (
              <td key={header}>{row[header]}</td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Table;
