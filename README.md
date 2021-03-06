# Weekend: The Movie Hub

This is a front-end web application that would display all your movies. Users will also have the ability to keep track of all the movies that have been liked.

## Project Design

### [Design Doc](https://docs.google.com/document/d/1DHSacd4m1-QP41E7bZrgM8BjDcCVP_tVVHQ_PQTNjJ4/edit?usp=sharing)

### [Wire Frame](https://www.figma.com/file/WXKfquRWZGtLL8Pnrlfnbb/Untitled?node-id=0%3A1)

## Here is how to setup this project

1. Clone the repository
2. Run the command `npm install` or `yarn install` to install all of the dependancies
3. In order to make the API request work, you need to create a `.env` file on the root of the project, then in the file add:

```
    REACT_APP_API_KEY=<insert api key here>
```
    NB: You will need to re-run the application if you created the `.env` file with the key file after you run the application.
4. To run the App in Development mode run `npm start` or `yarn start`
5. To run all the unit tests in this application run `npm test` or `yarn test`

## Here are more information about the scripts that you can run

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.
