import React from "react";

export default function Table ({data, config, keyFn}) {
  console.log('key:', keyFn)
  const renderedHeaders = config.map(column => {
    if (column.header) {
      return <React.Fragment key={column.label}>{column.header()}</React.Fragment>
    }
    return <th key={column.label}>{column.label}</th>
  })
console.log('data:', data);
  const renderedData = data.map((row) => (
    <tr className="border-b"key={keyFn(row)}>
      {config.map(col => <td key={col.label}>{col.render(row)}</td>)}
    </tr>
  ));

  return (
    <table className="table-auto border-spacing-2">
      <thead>
        <tr className="border-b-2">
         {renderedHeaders}
        </tr>
      </thead>

      <tbody>
        {renderedData}
      </tbody>
    </table>
  )
};