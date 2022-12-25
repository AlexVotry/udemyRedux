export default function objSort (data,row,order) {
 return  data.sort((a,b) => {
    const valA = row(a);
    const valB = row(b);
    if (typeof valA === 'string') return valA.localeCompare(valB) * order;

    return (valA - valB) * order;
  })
};