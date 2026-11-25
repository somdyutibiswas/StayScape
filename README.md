# StayScape 🏡
### Discover stays. Explore places.

StayScape is a web-based accommodation listing platform where users can explore places to stay, create property listings, view locations on maps, and share reviews.

## Features

- Browse and explore accommodation listings
- Create, edit, and delete property listings
- User registration, login, and logout
- Authentication and authorization
- Review and rating system
- Image uploads using Cloudinary
- Interactive maps and location visualization using Mapbox

## Tech Stack

- **Frontend:** HTML, CSS, JavaScript, Bootstrap, EJS
- **Backend:** Node.js, Express.js
- **Database:** MongoDB, Mongoose
- **Authentication:** Passport.js
- **Image Storage:** Cloudinary
- **Maps:** Mapbox

## MVC Architecture

StayScape follows the Model-View-Controller (MVC) architecture.

- **Model:** Handles database schemas and data operations.
- **View:** EJS templates render the user interface.
- **Controller:** Handles application logic and request processing.
- **Routes:** Direct incoming requests to the appropriate controllers.

## Installation & Setup

```bash
git clone https://github.com/somdyutibiswas/StayScape.git
cd StayScape
npm install
```

Create a `.env` file and configure the required environment variables for MongoDB, Cloudinary, Mapbox, and session management.

Start the application:

```bash
node app.js
```

Visit:

```text
http://localhost:8000
```

## Project Structure

```text
StayScape/
├── controllers/
├── models/
├── routes/
├── views/
├── public/
├── utils/
├── init/
├── app.js
├── middleware.js
└── cloudConfig.js
```

## Future Improvements

- Booking functionality
- Advanced search and filters
- Wishlist feature

## Author

**Somdyuti Biswas**

GitHub: [somdyutibiswas](https://github.com/somdyutibiswas)

---

⭐ If you like StayScape, feel free to explore the repository.
