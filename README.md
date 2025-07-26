# BlueKey Backend README

# BlueKey Backend

## Overview

BlueKey is a full-stack rental management application designed to facilitate the management of rental assets, user authentication, and booking processes. This README provides instructions for setting up and running the backend of the application.

## Prerequisites

- Node.js (version 14 or higher)
- npm (Node Package Manager)
- MongoDB or any other database of your choice

## Installation

1. Clone the repository:

   ```bash
   git clone <repository-url>
   cd BlueKey/backend
   ```

2. Install the dependencies:

   ```bash
   npm install
   ```

## Configuration

1. Create a `.env` file in the root of the backend directory and add your database connection string and any other environment variables required for your application.

   Example:
   ```
   DATABASE_URL=mongodb://localhost:27017/bluekey
   JWT_SECRET=your_jwt_secret
   ```

## Running the Application

To start the server, run the following command:

```bash
npm start
```

The server will start on `http://localhost:3000` by default.

## API Endpoints

- **User Authentication**
  - `POST /api/auth/register`: Register a new user
  - `POST /api/auth/login`: Log in an existing user

- **Asset Management**
  - `GET /api/assets`: Retrieve all rental assets
  - `POST /api/assets`: Create a new rental asset

- **Booking Management**
  - `POST /api/bookings`: Create a new booking
  - `GET /api/bookings`: Retrieve all bookings for a user

## Testing

To run tests, use the following command:

```bash
npm test
```

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Acknowledgments

- Express.js for the web framework
- Mongoose for MongoDB object modeling
- JSON Web Tokens for authentication

For any issues or feature requests, please open an issue in the repository.