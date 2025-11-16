import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Intro } from "./pages/Intro";
import PhoneAuth from "./pages/PhoneAuth";
import { VerificationCodePage } from "./pages/VerificationCodePage";
import {SignUp} from './layouts/SignUp';
import { SignUpPage } from './pages/sign-up/index';


const App = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Intro />,
    },
    {
      path: "/sign-up",
      element: <SignUp />,
      children: [
        { index: true, element: <SignUpPage /> },
        { path: "phone-number", element: <PhoneAuth /> },
        { path: "phone-verification", element: <VerificationCodePage /> },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
};

export default App;
