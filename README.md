
# React-Sample 

**https://home-tenant.netlify.app/**

## Abstract

The goal of the application is to receive the necessary information from a tenant to list the houses which match the criteria. The application has a main form which is split into 4 segments
- Name
- Email
- Phone
- Salary

A review and a thank you page are also added at the end to notify the user about the status of the form.

## Installation

Kindly do an `npm install` at the root directory of the application. This will install the necessary dependencies for the application. 

```
npm install 
```

The following are the major libraries that are used in front-end.
- React v16.9.0
- Material-UI v4.9.12
- i18next
- Jest 
- react-testing-library
- enzyme
- node-sass

## Serving Locally

Once the packages have been installed you may serve application locally using `npm start` on the root directory of the application. Following is the port the application runs on

`home-tenant-form` :  [http://localhost:3000](http://localhost:3000)

### Scripts

`npm run start` - Serves the app locally on [http://localhost:3000](http://localhost:3000)

`npm run test` - Runs the test scrips on the specific application

`npm run build` - Builds a minified version of the frontend application. It bundles and minifies React in production mode and optimizes the build for the best performance.

## Architecture

A high-level architecture of the application can be found below

<p align="center"><img src="/Architecture.png"></p>

### Code Splitting

Code Splitting is a must-have for any front-end application due to the performance benefits it offers. Sending the application in chunks improves the load times of the application by a great margin. Code splitting has been thoroughly followed in the entire application

### Typescript

Typescript is preferred over the regular javascript due to the advantages such as
- Great tooling support with IntelliSense
- Optional static typing 
- Ahead-Of-Time type checking
- Type Inference, which gives some of the benefits of types, without actually using them

## Testing

Testing is engrained in almost every component in the application. All component folders have a **[component].test.ts** which contains the set of unit tests specific to the particular component. Running `npm test` runs all the .test files across all components. 

### State Management

Redux has been used to help manage states in the application. In an application that has a lot of data that needs to be persisted, it is preferable to have a common source of truth. Redux also helps in the case when we would want to backtrack data.

### React Router

Routing is enabled through react-router v4. All the routes in the application are managed in a single file called **routes.ts** which could be found at [`src/routes.ts`](./src/routes.ts)

### React Suspense

React suspense has been used to help us manage the loading state of our code-split application. Suspense suspends rendering and automatically displays the fallback which is the Loader component in our case until the components chunks are available in the dom.

### Functional Components

Most of the components in the application are stateless functional components. Hooks have been used if components need to maintain a state.

## Deployment
- The application has been deployed on Netlify.
- Continuous Integration has been enabled and is currently synced with the repo [https://github.com/dhirajsriram/home-tenant-form](https://github.com/dhirajsriram/home-tenant-form)

## Description

The application works on a single page, Following are the views that the application works on
- Form
- FourZeroFour

### Form

This the main view of the application. It handles all the logic related to collecting the information from the customer. Following are the functionality of the form component

- Handles validation
- The validations are active based on the user input
- Ability to move forward or go back a step 
- Updates the value and validity of a field in the redux store

## Design

### Folder structure

The application was designed to be as granular as possible in terms of functionality. Separation of concerns was the goal while designing the project. The general rule of thumb was to have the return statements to be as minimal as possible. The folder structure of the application is as follows

```
├── 📁public
├── 📁node_modules
├── 📄package.json
├── 📄README.md
└── 📁src
    ├── 📁assets
    ├── 📁common
    ├── 📁pages
    ├── 📁scss
    ├── 📁store
    ├── 📄App.tsx
    ├── 📄App.test.tsx
    ├── 📄index.tsx
    ├── 📄logo.svg
    └── 📄routes.ts 
```
[`src/assets`](./src/assets) - Contains all the static assets such as the images, fonts etc

[`src/common`](./src/common) - Contains all the shared components such as error, Search, menu, map, etc

[`src/pages`](./src/pages) - The different pages of the application are placed here. At present, the app runs on a single page **Home**

[`src/assets`](./src/assets) - Images necessary for the application are present here.

[`src/scss`](./src/scss) - Contains the .scss files for variables, resets, mixing and typography which is specific to the application

[`src/store`](./src/store) - Contains the files related to the redux store such as the action reducers and constants. 

### UX Design

The application strongly follows a Material design approach. Elements shown to users represent life-like materials like paper which is something that a user can connect with very easily. 

### Animation
CSS animations are used to create a slide up effect on the form fields. CSS animations scale better over the javascript counterparts since the browser is able to delegate the CSS animations to the GPU when required.

### Responsive

The entire application is responsive. Grid and flex has been used to display an optimal experience to the user for the current viewport

## Error Handling

The application handles errors gracefully. The application checks for the response status. If the route is not present an Error component is shown to the user with the corresponding error message.

## Future Implementation

- Ability to process the information with an API
- Validation for phone number based on the country
- Send email for successful submit

