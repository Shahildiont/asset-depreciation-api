const calculateDepreciation = (cost, salvageValue, duration) => {
  const salvageAmount = (cost * salvageValue) / 100;

  const annualDepreciation = (cost - salvageAmount) / duration;

  const yearlyDepreciation = [];

  let openingValue = cost;

  for (let year = 1; year <= duration; year++) {
    const closingValue = openingValue - annualDepreciation;

    yearlyDepreciation.push({
      year,
      openingValue,
      depreciation: annualDepreciation,
      closingValue,
    });

    openingValue = closingValue;
  }

  return {
    salvageAmount,
    annualDepreciation,
    yearlyDepreciation,
  };
};

module.exports = {
  calculateDepreciation,
};