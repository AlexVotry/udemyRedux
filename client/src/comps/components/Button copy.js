import React from 'react';

export default function Button ({ rounded , outline , primary, secondary, success, warning, danger, children, ...rest }) {
  let i = 0;
  const states = [primary,secondary,success,warning,danger];
  const count = states.map(a => a ? 1 : 0).reduce((a,b) => a + b); 
  if (count > 1) console.error('Warning: Only one purpose (primary, secondary, etc) can be used for the Button');
  const pill = rounded ? "rounded-full" : "";
  const color = [
    "bg-blue-500",
    "bg-gray-900",
    "bg-green-500",
    "bg-yellow-400",
    "bg-red-500",
  ];
  const textColor = [
    "text-blue-500",
    "text-gray-900",
    "text-green-500",
    "text-yellow-400",
    "text-red-500",
  ];
  const borderColor = [
    "border-blue-500",
    "border-gray-900",
    "border-green-500",
    "border-yellow-400",
    "border-red-500",
  ];

  for (let index = 0; index < states.length; index++) {
    if (states[index]) {
      i = index;
      break;
    }
  }
  
  const border = outline
    ? `bg-white border-2 ${borderColor[i]} ${textColor[i]}`
    : `${color[i]} border ${borderColor[i]} text-white`;
    const classes = `flex items-center px-3 py-1.5 ${border} ${pill} ${rest.className} `;

  return (
    <button {...rest} className={classes}>
      {children}
    </button>
  );
}