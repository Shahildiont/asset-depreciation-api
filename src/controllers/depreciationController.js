const { calculateDepreciation } = require("../services/depreciationService");

const calculateAssetDepreciation = (req, res) => {
  try {
    const { cost, salvageValue, duration } = req.body || {};

    // Validation of given values
    if (cost === undefined || salvageValue === undefined || duration === undefined) {
      return res.status(400).json({
        message: "cost, salvageValue, and duration are required",
      });
    }

    // Validating that values are numbers
    if (
      typeof cost !== "number" ||
      typeof salvageValue !== "number" ||
      typeof duration !== "number"
    ) {
      return res.status(400).json({
        message: "cost, salvageValue, and duration must be numbers",
      });
    }

    // Validating value ranges
    if (cost <= 0) {
      return res.status(400).json({
        message: "cost must be greater than 0",
      });
    }

    if (salvageValue < 0 || salvageValue > 100) {
      return res.status(400).json({
        message: "salvageValue must be between 0 and 100",
      });
    }

    if (duration <= 0 || !Number.isInteger(duration)) {
      return res.status(400).json({
        message: "duration must be a positive integer",
      });
    }

    const result = calculateDepreciation(
      cost,
      salvageValue,
      duration
    );

    return res.status(200).json({
      cost,
      salvageValue,
      duration,
      ...result,
    });
  } catch (error) {
  console.error(error);

  return res.status(500).json({
    message: "Internal server error",
    error: error.message,
  });
}
};

module.exports = {
  calculateAssetDepreciation,
};