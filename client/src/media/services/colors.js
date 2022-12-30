
const primary = {
  bg: "bg-blue-500", 
  border: "border-blue-500", 
  text: 'text-blue-500'
};

const secondary = {
  bg: "bg-gray-500",
  border: "border-gray-500",
  text: "text-gray-500",
};
const success = {
  bg: "bg-green-500",
  border: "border-green-500",
  text: "text-green-500",
};
const warning = {
  bg: "bg-yellow-500",
  border: "border-yellow-500",
  text: "text-yellow-500",
};;
const danger = {
  bg: "bg-red-500",
  border: "border-red-500",
  text: "text-red-500",
};;

const color = [primary,secondary,success,warning,danger];

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
