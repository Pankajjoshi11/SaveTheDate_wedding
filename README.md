# SaveTheDate

Welcome to **SaveTheDate**, a unique wedding booking platform that introduces tourists and foreigners to the grandeur and cultural richness of Indian weddings. This platform provides an unforgettable experience by connecting individuals with Indian wedding events, ensuring they witness the traditions, music, food, and celebrations that make Indian weddings extraordinary.

## Features
- **Book Your Experience**: Reserve tickets for exclusive Indian wedding events.
- **Detailed Itineraries**: Explore pre-wedding, wedding, and post-wedding events, including Sangeet, Mehendi, and the main ceremony.
- **Cultural Immersion**: Learn about the stories, traditions, and significance behind the wedding events.
- **Customizable Menus**: Discover diverse Indian cuisines with detailed menus for each event.
- **Easy Payments**: Secure and hassle-free payments powered by Stripe.
- **Host and Guest Interaction**: Hosts can manage guests, and attendees can make special requests.

## Tech Stack
### Frontend
- **React**: A robust JavaScript library for building user interfaces.
- **Tailwind CSS**: A utility-first CSS framework for rapid UI development.

### Backend
- **Node.js**: A JavaScript runtime for scalable backend development.
- **Express.js**: A minimalist web framework for building robust APIs.

### Database
- **MongoDB**: A NoSQL database for flexible and scalable data storage.

### Payment Gateway
- **Stripe**: Integrated for secure and efficient payment processing.

## Installation
### Prerequisites
Ensure you have the following installed on your machine:
- [Node.js](https://nodejs.org/)
- [MongoDB](https://www.mongodb.com/)
- [npm](https://www.npmjs.com/) or [yarn](https://yarnpkg.com/)

### Steps
1. Clone the repository:
   ```bash
   git clone https://github.com/Pankajjoshi11/SaveTheDate_wedding.git
   ```

2. Navigate to the project directory:
   ```bash
   cd SaveTheDate
   ```

3. Install dependencies for the frontend and backend:
   ```bash
   cd frontend
   npm install
   cd ../backend
   npm install
   ```

4. Set up environment variables:
   - Create a `.env` file in the backend directory.
   - Add the following variables:
     ```env
     MONGO_URI=your_mongo_connection_string
     STRIPE_SECRET_KEY=your_stripe_secret_key
     PORT=8000
     ```

5. Start the development servers:
   ```bash
   # Start the backend
   cd backend
   npm run dev

   # Start the frontend
   cd ../frontend
   npm start
   ```

6. Open your browser and navigate to `http://localhost:3000`.

## Folder Structure
```
SaveTheDate/
|-- frontend/
|   |-- src/
|   |-- public/
|-- backend/
|   |-- routes/
|   |-- models/
|   |-- controllers/
|   |-- config/
```

## Contributing
We welcome contributions to make SaveTheDate even better! To contribute:
1. Fork the repository.
2. Create a new branch for your feature:
   ```bash
   git checkout -b feature-name
   ```
3. Commit your changes:
   ```bash
   git commit -m "Add your message here"
   ```
4. Push the branch:
   ```bash
   git push origin feature-name
   ```
5. Create a pull request.

## License
This project is licensed under the MIT License. See the LICENSE file for more details.

## Acknowledgements
- Inspired by the vibrant culture and traditions of India.



