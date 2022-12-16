import React from 'react';
import className from 'classnames';
import { getColor } from './colors';

export default function Button ({ rounded , outline , primary, secondary, success, warning, danger, children, ...rest }) {
  const states = [primary,secondary,success,warning,danger];
  const count = states.map(a => a ? 1 : 0).reduce((a,b) => a + b); 
  if (count > 1) console.error('Warning: Only one purpose (primary, secondary, etc) can be used for the Button');
  const color = getColor(states);
  const borderText = outline ? `text-${color} bg-white border-2` : `bg-${color} text-white`;

  const classes = className(
    rest.className,
    borderText,
    `border-${color}`,
    "flex items-center px-3 py-1.5 border",
    {
      "rounded-full": rounded,
    }
  );

  return (
    <button {...rest} className={classes}>
      {children}
    </button>
  );
}