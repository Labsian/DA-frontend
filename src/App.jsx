
import { Intro } from "./pages/Intro";
import { createBrowserRouter } from 'react-router-dom';
import { RouterProvider } from 'react-router-dom';


const App = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Intro />,
      // errorElement: <ErrorPage />,
      // children: [{ index: true, element: <Intro /> }],
    },
  ]);

  return <RouterProvider router={router}></RouterProvider>;
};

export default App;
