const express = require("express");

const {
  calculateAssetDepreciation,
} = require("../controllers/depreciationController");

const router = express.Router();

router.post(
  "/calculate_asset_depreciation",
  calculateAssetDepreciation
);

module.exports = router;