import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { SignUp } from "./layouts/SignUp";
import { Intro } from "./pages/Intro";
import PhoneAuth from "./pages/sign-up/PhoneAuth";
import { VerificationCodePage } from "./pages/sign-up/VerificationCodePage";
import { SignUpPage } from "./pages/sign-up/index";
import { Gender } from './pages/sign-up/gender';
import { Interests } from "./pages/sign-up/interests";
import { Friends } from "./pages/sign-up/Friends";
import { Notifications } from "./pages/sign-up/notifications";
import { SwipePage } from "./pages/swipe/Swipe";
import { Swipe } from "./layouts/Swipe";
import { ProfileDetailsPage } from "./pages/sign-up/ProfileDetailsPage";
import { Match } from "./pages/swipe/match";
import { Matches } from "./pages/swipe/matches";
import { Messages } from "./pages/messages/Messages";
import MessagesLayout from "./layouts/MessagesLayout";

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
        { path: "gender", element: <Gender /> },
        { path: "interests", element: <Interests /> },
        { path: "friends", element: <Friends /> },
        { path: "notifications", element: <Notifications /> },
        { path: "swipe-page", element: <SwipePage /> },
        { path: "profile-details", element: <ProfileDetailsPage /> },
      ],
    },
    {
      path: "/swipe",
      element: <Swipe />,
      children: [
        { index: true, element: <SwipePage /> },
        { path: "matches", element: <Matches /> },

      ],
    },
    {
      path: "/match",
      element: <Match />,
    },
    {
      path: "/messages",
      element: <MessagesLayout/>,
            children: [
        { index: true, element: <Messages /> },

      ],
    },
  ]);
  return <RouterProvider router={router} />;
};

export default App;
