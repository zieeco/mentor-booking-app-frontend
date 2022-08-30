import Homepage from "./pages/Homepage";
import Reserve from "./pages/Reserve";
import UserAuth from "./components/UserAuth";
import MentorAuth from "./components/MentorAuth";
import Details from "./pages/Details";
import Homepage from './pages/Homepage';
import MyReservations from './pages/MyReservations';
import Profile from './pages/Profile';
import PendingMentors from './components/PendingMentors';


const routes = [
  {
    path: "/",
    title: "Homepage",
    exact: true,
    element: <Homepage />,
  },
  {
    path: '/myreservations',
    title: 'My Reservations',
    exact: true,
    element: <MyReservations />,
  },
  {
    path: '/auth/user',
    title: 'UserAuth',
    exact: true,
    element: <UserAuth />,
  },
  {
    path: "/auth/mentor",
    title: "MentorAuth",
    exact: true,
    element: <MentorAuth />,
  },
  {
    path: "/mentor/:id",
    title: "Mentor Details",
    exact: true,
    element: <Details />,
  },
  {
    path: "/reserve",
    title: "Reserve",
    exact: true,
    element: <Reserve />,
   },
  {
    path: '/profile',
    title: 'Profile Page',
    exact: true,
    element: <Profile />,
  },
  {
    path: 'admin/approve-mentors',
    title: 'Pending Aprrovals',
    exact: true,
    element: <PendingMentors />,
  },
];

export default routes;
