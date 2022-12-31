import React from 'react';
import classNames from 'classnames';
import { getColor } from '../services/colors';
import { GoSync } from 'react-icons/go';

export default function Button ({ 
  rounded,
  outline,
  primary, 
  secondary, 
  success, 
  warning, 
  danger,
  loading, 
  children, 
  ...rest 
}) {
  const states = [primary,secondary,success,warning,danger];
  const count = states.map(a => a ? 1 : 0).reduce((a,b) => a + b); 
  if (count > 1) console.error('Warning: Only one purpose (primary, secondary, etc) can be used for the Button');
  const color = getColor(states);
  const borderText = outline ? `${color.text} bg-white border-2` : `${color.bg} text-white`;

  const classes = classNames(
    rest.className,
    borderText,
    `${color.border}`,
    "flex items-center px-3 py-1.5 border h-8",
    {
      "rounded-full": rounded,
      'opacity-80': loading,
    }
  );

  return (
    <button {...rest} className={classes} disabled={loading}>
      {loading ? <GoSync className='animate-spin'/> : children }
    </button>
  );
}