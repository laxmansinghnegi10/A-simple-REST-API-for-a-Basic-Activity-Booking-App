# Activity Booking API

A simple REST API for a Basic Activity Booking App

## Repository

- GitHub: [https://github.com/RahulK847/activity-booking-app](https://github.com/RahulK847/activity-booking-app.git)

## Live Demo

- Render: [https://activity-booking-app-0b52.onrender.com](https://activity-booking-app-0b52.onrender.com)

## Features

- User Registration & Login (JWT Authentication)
- List Activities (Public)
- Book Activities (Authenticated Users Only)
- View User's Bookings

## Tech Stack

- Node.js with Express.js
- MongoDB with Mongoose (Atlas for cloud hosting)
- JWT for Authentication
- Express Validator for Input Validation
- Bcrypt for Password Hashing

## API Endpoints

### Users

- **Register User**: `POST /api/users/register`
  - Body: `{ name, email, phone, password }`
- **Login User**: `POST /api/users/login`
  - Body: `{ email, password }`
  - Returns: JWT token

### Activities

- **Get All Activities**: `GET /api/activities`
  - Public endpoint
- **Get Single Activity**: `GET /api/activities/:id`
  - Public endpoint
- **Create Activity**: `POST /api/activities`
  - Protected endpoint
  - Body: `{ title, description, location, dateTime }`

### Bookings

- **Book an Activity**: `POST /api/bookings`
  - Protected endpoint
  - Body: `{ activityId }`
- **Get My Bookings**: `GET /api/bookings/me`
  - Protected endpoint

## Setup Instructions (Local)

1. Clone the repository and install dependencies:
   ```
   git clone https://github.com/RahulK847/activity-booking-app.git
   cd activity-booking-app
   npm install
   ```
2. Create a `.env` file in the root directory:
   ```
   PORT=5000
   MONGODB_URI=mongodb://localhost:27017/activity-booking-app
   JWT_SECRET=your_jwt_secret_key_here
   JWT_EXPIRE=30d
   ```
3. Start the server:

   ```
   npm run dev
   ```

4. **Test your API using Postman:**
   - Import the provided Postman collection.
   - Replace `https://activity-booking-app-0b52.onrender.com` with your Render URL in all requests.

## 🔍 API Testing

✅ **Postman Collection** included in the repository.

- Import `activity-booking-api.postman_collection.json` into Postman.

🔗 **Example Endpoints:**  
| Action | URL |
|-------------------------|-----------------------------------------------------------------|
| Register User | `https://activity-booking-app-0b52.onrender.com/api/users/register` |
| Login User | `https://activity-booking-app-0b52.onrender.com/api/users/login` |
| Get All Activities | `https://activity-booking-app-0b52.onrender.com/api/activities` |
| Get Single Activity | `https://activity-booking-app-0b52.onrender.com/api/activities/:id` |
| Create Activity | `https://activity-booking-app-0b52.onrender.com/api/activities` |
| Book an Activity | `https://activity-booking-app-0b52.onrender.com/api/bookings` |
| Get My Bookings | `https://activity-booking-app-0b52.onrender.com/api/bookings/me` |

---

## 📄 License

This project is licensed under the [MIT License](LICENSE).
