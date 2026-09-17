# Asset Depreciation API

A simple Node.js and Express API for calculating asset depreciation.

## Installation

Clone the repository:

```bash
git clone https://github.com/Shahildiont/asset-depreciation-api.git
```

Go to the project folder:

```bash
cd asset-depreciation-api
```

Install the required packages:

```bash
npm install
```

## Run the Project

For development:

```bash
npm run dev
```

Or run normally:

```bash
npm start
```

The server will run at:

```text
http://localhost:4000
```

## API

### Calculate Asset Depreciation

**POST**

```text
/calculate_asset_depreciation
```

Example request:

```json
{
  "cost": 10000,
  "salvageValue": 10,
  "duration": 5
}
```
### Example Response

```json
{
  "cost": 10000,
  "salvageValue": 10,
  "duration": 5,
  "salvageAmount": 1000,
  "annualDepreciation": 1800,
  "yearlyDepreciation": [
    {
      "year": 1,
      "openingValue": 10000,
      "depreciation": 1800,
      "closingValue": 8200
    },
    {
      "year": 2,
      "openingValue": 8200,
      "depreciation": 1800,
      "closingValue": 6400
    },
    {
      "year": 3,
      "openingValue": 6400,
      "depreciation": 1800,
      "closingValue": 4600
    },
    {
      "year": 4,
      "openingValue": 4600,
      "depreciation": 1800,
      "closingValue": 2800
    },
    {
      "year": 5,
      "openingValue": 2800,
      "depreciation": 1800,
      "closingValue": 1000
    }
  ]
}
```

Where:

- `cost` is the purchase price of the asset.
- `salvageValue` is the salvage value in percentage.
- `duration` is the number of years.
