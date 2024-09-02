import React from 'react';
import { RouterProvider, createBrowserRouter, Link } from 'react-router-dom';
import Test from './components/Test';
import Dynamic from './components/Dynamic';
import Random from './components/Random';
import Title from './components/Title';
import Registration from './components/Registration';
import Users from './components/Users';

// Define your routes
const router = createBrowserRouter([
  {
    path: "/home",
    element: <div>Hello world!</div>,
  },
  {
    path: "/registration",
    element: <Registration />,
  },
  {
    path: "/user-list",
    element: <Users />,
  },
]);

function App() {
  return (
    <RouterProvider router={router}>
      <div>
        <h1>Hello react</h1>
        <Registration />
        <hr />
        <Users />
        <hr />
        {/* props  */}
        <Title name="Ahmad" email="ahmad@gmail.com" contactNo={'231654'} rollNo={56} address={'sialkot'} />
        <Title name="Abdullah" email={'abdullah@gmail.com'} contactNo={12346} rollNo={33} address={'alipure'} />

        <hr />
        <h2>h2 heading</h2>
        <Test />
        <Dynamic />
        <Random />
        <Random />
        <Random />
        <Random />
      </div>
    </RouterProvider>
  );
}

export default App;
