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

Where:

- `cost` is the purchase price of the asset.
- `salvageValue` is the salvage value in percentage.
- `duration` is the number of years.
