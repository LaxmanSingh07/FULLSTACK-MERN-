# REACT ROUTER 

What is React Router?

React Router is a collection of navigational components that compose declaratively with your application. Whether you want to have bookmarkable URLs for your web app or a composable way to navigate in React Native, React Router works wherever React is rendering--so take your pick!


`As we know React is used to make SPA (Single Page Application) and routing is an essential part of any web application. React Router is a powerful routing library built on top of React, which helps in adding new screens and flows to the application. React Router uses component structure to call components, which display the appropriate information.`

**npm package**

```bash
npm i react-router-dom


```

### Router 

Router is the main component of React Router. It keeps your UI in sync with the URL. Whenever the URL changes, the Router component re-renders the UI components along with the updated URL. It is the root component for a React Router application. It acts as a container for our application’s UI.

```js
import { BrowserRouter as Router } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        <h1>React Router</h1>
      </div>
    </Router>
  );
}

```

### Route 

Route is a React component that is used to define the matching pattern between the URL and the UI component. It is the basic building block of a React Router application. It helps in navigation for the application. It is used to render the component when the path matches the current URL.

```js

import { BrowserRouter as Router, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        <h1>React Router</h1>
        <Route path="/home" component={Home} />
        <Route path="/about" component={About} />
        <Route path="/contact" component={Contact} />
      </div>
    </Router>
  );
}

```


`Link tag `:

Link tag is used to navigate between the pages. It is used to create hyperlinks for navigation from one page to another page. It is similar to the anchor tag in HTML. It is used to provide a clickable link to the user interface.

```js

import { BrowserRouter as Router, Route, Link } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        <h1>React Router</h1>
        <Link to="/home">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/contact">Contact</Link>
        <Route path="/home" component={Home} />
        <Route path="/about" component={About} />
        <Route path="/contact" component={Contact} />
      </div>
    </Router>
  );
}

```

`NavLink tag `:

Navlink tag is used to prvoide the active class to the link. It is used to provide a clickable link to the user interface. It is similar to the anchor tag in HTML. It is used to provide a clickable link to the user interface.

```js

import { BrowserRouter as Router, Route, NavLink } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        <h1>React Router</h1>
        <NavLink to="/home">Home</NavLink>
        <NavLink to="/about">About</NavLink>
        <NavLink to="/contact">Contact</NavLink>
        <Route path="/home" component={Home} />
        <Route path="/about" component={About} />
        <Route path="/contact" component={Contact} />
      </div>
    </Router>
  );
}

```


## Nested Routing

nested routing refers to the practice of defining routes within other routes. This is typically used when you have a component that serves as a container for other components, and you want to define routes for those nested components within the context of the container component.

`Outlet tag `:

Outlet tag is used to render the child component. It is used to render the child component.


