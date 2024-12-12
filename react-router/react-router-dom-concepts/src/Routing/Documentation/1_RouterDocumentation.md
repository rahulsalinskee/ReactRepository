- Router Documentation:
    - About:
        - This is of 6.0 version.
        - It is popular library for managing navigation and routing in React.
        - It helps in creating a seamless user experience by allowing us to define different routes and their corresponding components.
        
    - Primary Use Cases:
        - Declarative Routing: With V6 (Version 6), we define our routes using JSX components. 
        - Instead of <switch> component, we use <Routes> component to declare routes.
        
        - Route Components: 
            - Each route is represented by <Route> component, where we specify the path and the component to be rendered when the route (path) is matched.

        - Hooks based approach: 
            - React Router V6 introduced a new approach to handling routing using hooks. 
            - We use useRoutes() hook to handle routing logic based on declared routes in our components & useNavigate() hook to navigate between routes.

        - Nested Routes: 
            - We can define nested routes by nesting <Route> components within each other.

        - Route parameters: 
            - Route Parameters are now accessed using the useParams() hook to retrieve the route parameters from URL.

        - Navigation: 
            - For navigation, we can use useNavigate() hook to programmatically navigate between routes. 
            - This simplifies the process of navigating between different routes in our application.

        - Layout and LayoutRoute: 
            - In Version 6 (V6), The concept of Layout routes got introduced. 
            - It allows us to define a common layout that wraps specific set of routes. 
            - This is useful for creating consistent UI structures.

        - No Render Props:
            - Unlike the previous version Versions, Version 6 (V6) gets rid of render props pattern.
            - Instead all related components are hook. 
            - This simplifies the code and makes it more in line with modern React patterns.
            - we use the <Outlet> component to render the child components of a route.

    - How to install React Router Dom:
        - npm install react-router-dom
        - Current React Router Dom Version is: "react-router-dom": "^7.0.2",
        - In this example, we are using "react-router-dom": "^6.15.0"