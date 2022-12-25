export default function objSort (data,sortValue,order) {
 return  data.sort((a,b) => {
    const valA = sortValue(a);
    const valB = sortValue(b);
    if (typeof valA === 'string') return valA.localeCompare(valB) * order;

    return (valA - valB) * order;
  })
};