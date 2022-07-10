1. What is the Difference between react and react native? Which one is library or framework?
    ReactJS:-  It is an open-source JavaScript library used to build the user interface for Web Applications.It provides developers to compose complex UIs from a small and isolated piece of code called "components." 
ReactJS made of two parts first is components, that are the pieces that contain HTML code and what you want to see in the user interface, and the second one is HTML document where all your components will be rendered.
ReactNative:- React Native is an open-source JavaScript "framework" used for developing a mobile application for iOS Android, and Windows. 
It uses only JavaScript to build a cross-platform mobile app. React Native is same as React, but it uses native components instead of using web components as building blocks. It targets mobile platforms rather than the browser.

2. What is the package name you are using for routing?
    React Router, React Router DOM are used for routing in react.
    Routing is a process in which a user is directed to different pages based on their action or request.
    ReactJS Router is mainly used for developing Single Page Web Applications. React Router is used to define multiple routes in the application.
To Install:- npm install react-router-dom
react-router: It provides the core routing components and functions for the React Router applications.
react-router-dom: It is used for web applications design.

3. Coding.

4. How do you pass data from parent to child?
    React.js allows us to use "props" to pass data from parent component to child component. We have to set props value inside the child component, while we embed it to the parent component.

5. What is lazy loading in react ?
    lazy loading means that a component or a part of code must get loaded when it is required. It is also referred to as code splitting and data fetching.
    In React, it bundles the complete code and deploys all of it at the same time.
    which is okay for Small SPA's but for the big application loading complete application at the same time might create issues.So,  it is best to load them when the user requests for it.

6. Difference b/w Stateful and stateless Component?
    Functional Component or Stateless component
Functional component is like pure function in JavaScript.
Functional component is also called as a stateless component.
The functional component only receives props from parent component and return you JSX elements.
The functional component doesn’t play with any lifecycle methods of React and doesn’t play with the component state.
    
    Class component or statefull component
React class component is called as a stateful component.
Stateful component plays with all life cycle methods of React.
This component will modify state.

7. How do you switch one component to another, Conditional Rendering?
    React Router

    Link

    NavLink

    Using conditions with logical && operator

Conditional Rendering:- ! Conditional rendering in React works the same way conditions work in JavaScript. Use JavaScript operators like if or the conditional operator to create elements representing the current state, and let React update the UI to match them. ! That is to create multiple components and render them based on some conditions. This is also a kind of encapsulation supported by React.