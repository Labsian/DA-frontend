import { createBrowserRouter, RouterProvider } from "react-router-dom";
import MessagesLayout from "./layouts/MessagesLayout";
import { SignUp } from "./layouts/SignUp";
import { Swipe } from "./layouts/Swipe";
import { Intro } from "./pages/Intro";
import { Messages } from "./pages/messages/Messages";
import { Gallary } from "./pages/profile/gallary";
import { Profile } from "./pages/profile/profile";
import { Friends } from "./pages/sign-up/Friends";
import PhoneAuth from "./pages/sign-up/PhoneAuth";
import { ProfileDetailsPage } from "./pages/sign-up/ProfileDetailsPage";
import { VerificationCodePage } from "./pages/sign-up/VerificationCodePage";
import { Gender } from "./pages/sign-up/gender";
import { SignUpPage } from "./pages/sign-up/index";
import { Interests } from "./pages/sign-up/interests";
import { Notifications } from "./pages/sign-up/notifications";
import { SwipePage } from "./pages/swipe/Swipe";
import { Match } from "./pages/swipe/match";
import { Matches } from "./pages/swipe/matches";

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
      path: "/profile",
      element: <Profile />,
    },
    { path: "profile/gallary", element: <Gallary /> },
    {
      path: "/messages",
      element: <MessagesLayout />,
      children: [{ index: true, element: <Messages /> }],
    },
  ]);
  return <RouterProvider router={router} />;
};

export default App;
