export const getDate = (date, format = {}) => {
  const { y = 'numeric', m = 'long', d = 'numeric' } = format;
  const newDate = new Date(date).toLocaleDateString('en-US', {
    year: y,
    month: m,
    day: d,
  });
  return newDate;
};
