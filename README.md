# Survey-app-react.js-redux-node.js-express.js-MongoDB


this has been my most challenging project yet. It utilizes many programming languages, frameworks, libraries, middleware and many other technologies. this project is still in development and I will continue to work on it for the up coming months.

as of the time of me writing this I've added log in using google oauth, buying credits with strife, filling a survey form and validating it, passing the user info to data base, sending the emails using send grid, wiring up the client side and server side.   


client side: I used React.js and redux as my main tools for building the front end. I chose to opt for redux-form instead of building a regular form and than connecting it with redux. redux-thunk was used for dispatching requests to the server side. I decided to try materialize CSS for styling this app. this app uses stripe for payment and only accepts usd but more currencies will be added in future updates. anyone can sign in to the app using a gmail and their google id will be saved to the data base. react-router-dom was also used for a lot of the route handling inside the app. the lodash library was also used in this app.

server side: I used passport.js for authentication, send grid for sending emails, stripe for payment, express.js as the back end framework. there is a routes folder containing all the back end api requests. a models folder for storing the mongo collections. and a middleware folder for checking if the user has logged in or has enough credits
