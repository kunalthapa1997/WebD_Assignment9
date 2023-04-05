
# Assignment 9

- Author: Kunal Thapa
- NUID: 002750470
- Email: thapa.ku@northeastern.edu


Project Name: Node-React Login and Dynamic Cards
This project is a combination of previous assignments - a Node.js assignment and a React.js assignment. It includes a login page that uses the usernames and passwords created in the Node.js assignment to allow users to login successfully. It also includes four pages (Home, About Us, Jobs, and Contact) created using React components and React Router. Additionally, a card component is added to each page to give details about each page.

Folder Structure
The project follows the REST API folder hierarchy as described below:

server.js - entry file
router.js - defines the routes for the API
controller.js - contains the controllers for each route
service.js - contains the services that handle the business logic for each controller
model.js - defines the schema for the MongoDB database
The React components are organized in separate folders for each page.

Technologies Used
The project uses the following technologies:

Node.js
React.js
MongoDB
React Router
Bootstrap
CSS
Getting Started
To run the project, follow the steps below:

Clone the repository on your local machine.
Run npm install to install the necessary dependencies.
Open a terminal and run mongod to start the MongoDB server.
Open another terminal and run npm run dev to start the development server.
Open http://localhost:3000 in your web browser to access the application.
Usage
The application includes the following pages:

Home
About Us
Jobs
Contact
Each page includes a card component with details about the page. The Home page includes a dynamic card component created using the map() method in React.

To access the login page, click on the Login button in the navigation bar. Enter a valid username and password created in the Node.js assignment to login successfully.

Conclusion
This project is an example of integrating a Node.js backend with a React.js frontend to create a dynamic web application with user authentication. The use of React Router, Bootstrap, and CSS provides a user-friendly experience for the application's users.