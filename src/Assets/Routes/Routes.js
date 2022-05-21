import HomePage from "../../Pages/HomePage/HomePage";
import SignUp from "../../Pages/SignUp/SignUp";
import LogIn from "../../Pages/LogIn/Login";
import Game2 from "../../Pages/Game2/Game2";
import Profile from "../../Pages/Profile/Profile";
import Logout from "../../Pages/Logout/Logout";
export const Routes = [
  {
    id: 1,
    component: HomePage,
    path: "/",
    exact: true,
  },
  {
    id: 4,
    component: SignUp,
    path: "/signup",
    exact: true,
  },
  {
    id: 5,
    component: LogIn,
    path: "/login",
    exact: true,
  },
  {
    id: 6,
    component: Game2,
    path: "/game2",
  },
  {
    id: 7,
    component: Profile,
    path: "/profile",
  },
  {
    id: 8,
    component: Logout,
    path: "/logout",
  },
];
