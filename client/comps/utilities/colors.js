
const primary = "blue-500";
const secondary = 'gray-900';
const success = 'green-500';
const caution = 'yellow-400';
const danger = 'red-500';

export const color = [primary,secondary,success,caution,danger];

export const getColor = states => {
  let i = 0;
  for (let index = 0; index < states.length; index++) {
    if (states[index]) {
      i = index;
      break;
    }
  };

  return color[i];
}
