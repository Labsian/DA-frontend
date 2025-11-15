
import { Intro } from "./pages/Intro";
import { createBrowserRouter } from 'react-router-dom';
import { RouterProvider } from 'react-router-dom';
import { SignUp } from "./pages/sign-up";


const App = () => {
  const router = createBrowserRouter([
    {
      // path: "/intro",
      path: "/",
      element: <Intro />,
      // errorElement: <ErrorPage />,
      // children: [{ index: true, element: <Intro /> }],
    },
    {
      path: "/sign-up",
      element: <SignUp />,
      // errorElement: <ErrorPage />,
      // children: [{ index: true, element: <Intro /> }],
    },
  ]);

  return <RouterProvider router={router}></RouterProvider>;
};

export default App;
