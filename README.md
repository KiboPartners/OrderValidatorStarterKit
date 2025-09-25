# Order Validator Starter Kit

This project is a starter kit for building a fraud validation service for e-commerce orders, implemented as a serverless application using AWS Lambda and the Serverless Framework. The service exposes a single API endpoint to validate incoming order payloads. This boilerplate provides a foundation for you to implement custom business logic for order validation.

## Table of Contents

- [Features](#features)
- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Scripts](#scripts)
- [API Documentation](#api-documentation)
  - [`POST /validateOrder`](#post-validateorder)
- [Project Structure](#project-structure)

---

## Features

- **Serverless Architecture**: Deploys to AWS Lambda and API Gateway for a scalable, pay-per-use solution.
- **TypeScript**: Written in TypeScript for enhanced developer experience and type safety.
- **Local Development**: Includes the `serverless-offline` plugin for testing the service locally without deploying to AWS.
- **KiboCommerce Integration**: Uses the `@kibocommerce/rest-sdk` for seamless integration with KiboCommerce order data.
- **Modular Design**: The project structure is set up to easily extend and add new validation logic.

## Prerequisites

Before you begin, ensure you have the following installed and configured:

- **Node.js**: Version 20.x or later.
- **npm**: The Node.js package manager.
- **Serverless Framework CLI**: Install it globally with `npm install -g serverless`.
- **AWS CLI**: Configured with credentials for your AWS account.

## Installation

1.  Clone this repository to your local machine.
    ```bash
    git clone [your-repo-url]
    cd order-validator-starter-kit
    ```
2.  Install the project dependencies.
    ```bash
    npm install
    ```

## Scripts

Use the following npm scripts for common development and deployment tasks:

| Command | Description |
|---|---|
| `npm run build` | Compiles the TypeScript source code (`.ts`) into JavaScript (`.js`). |
| `npm run start` | Builds the project and starts the local API server using `serverless-offline`. |
| `npm run deploy_dev` | Builds the project and deploys it to the `dev` stage on AWS. |
| `npm run deploy_prod` | Builds the project and deploys it to the `prod` stage on AWS. |

## API Documentation

The service exposes a single API endpoint for order validation.

### `POST /validateOrder`

This endpoint accepts an order payload and returns a validation response.

#### Request Body

The request body should be a JSON object representing a KiboCommerce `Order` as defined by the `@kibocommerce/rest-sdk`.
