# Asset Depreciation API

A Node.js and Express.js REST API for calculating yearly asset depreciation using the Straight-Line Method (SLM).

## Features

- Calculate annual asset depreciation
- Calculate yearly opening and closing values
- Supports salvage value as a percentage
- Input validation
- Proper HTTP status codes
- RESTful POST endpoint

## Tech Stack

- Node.js
- Express.js

## Project Structure

```text
asset-depreciation-api/
├── src/
│   ├── controllers/
│   │   └── depreciationController.js
│   ├── routes/
│   │   └── depreciationRoutes.js
│   ├── services/
│   │   └── depreciationService.js
│   ├── app.js
│   └── server.js
├── .gitignore
├── package-lock.json
├── package.json
└── README.md
```

## Installation

Clone the repository:

```bash
git clone https://github.com/Shahildiont/asset-depreciation-api.git
```

Navigate into the project:

```bash
cd asset-depreciation-api
```

Install dependencies:

```bash
npm install
```

## Running the Application

Development mode:

```bash
npm run dev
```

Production mode:

```bash
npm start
```

The server runs on:

```text
http://localhost:4000
```

## API Endpoint

### Calculate Asset Depreciation

```http
POST /calculate_asset_depreciation
```

Full URL:

```text
http://localhost:4000/calculate_asset_depreciation
```

## Request Body

```json
{
  "cost": 10000,
  "salvageValue": 10,
  "duration": 5
}
```

## Input Parameters

| Parameter | Type | Description |
|---|---|---|
| cost | Number | Purchase price of the asset |
| salvageValue | Number | Salvage value percentage |
| duration | Number | Useful life of the asset in years |

## Calculation

### Salvage Amount

```text
Cost × Salvage Value / 100
```

### Annual Depreciation

```text
(Cost − Salvage Amount) / Duration
```

## Example

For:

```text
Cost = ₹10,000
Salvage Value = 10%
Duration = 5 years
```

The calculation is:

```text
Salvage Amount = ₹10,000 × 10 / 100
               = ₹1,000

Annual Depreciation = (₹10,000 − ₹1,000) / 5
                    = ₹1,800
```

## Example Response

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

## Validation

The API validates the following:

- All required fields must be provided
- `cost` must be greater than 0
- `salvageValue` must be between 0 and 100
- `duration` must be a positive integer
- All input values must be numbers

Invalid requests return:

```text
400 Bad Request
```

Unexpected server errors return:

```text
500 Internal Server Error
```

## Testing

The API can be tested using Postman or any API testing tool.

### Valid Request

```json
{
  "cost": 10000,
  "salvageValue": 10,
  "duration": 5
}
```

### Invalid Request

```json
{
  "cost": -10000,
  "salvageValue": 10,
  "duration": 5
}
```

Response:

```json
{
  "message": "cost must be greater than 0"
}
```

## Depreciation Method

The API uses the Straight-Line Method (SLM).

The depreciation amount is distributed equally across the asset's useful life while maintaining the specified salvage value at the end of the duration.