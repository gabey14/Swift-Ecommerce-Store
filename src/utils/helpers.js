export const formatPrice = (number) => {
  return new Intl.NumberFormat('en-IN', {
    style: 'currency',
    currency: 'INR',
  }).format(number / 3.1989);
};

export const getUniqueValues = () => {};
